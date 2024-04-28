import { registerApplication, start } from "single-spa";

// Function to load micro frontend apps dynamically
const loadApp = async (appName) => {
  try {
    const app = await System.import(appName);
    return app;
  } catch (error) {
    console.error(`Failed to load ${appName}`, error);
    throw error; // Ensure startup does not proceed if there is a failure
  }
};

const registerMicroFrontends = async () => {
  // Load styleguide first to ensure global styles are available
  try {
    await System.import('@react-mf/styleguide');

    // Register other applications that depend on the global style being already loaded
    [
      '@react-mf/navbar',
		'@react-mf/people',
		'@react-mf/planets',
		'@react-mf/spacecraft'

      // Add additional micro frontends here
    ].forEach(async (appName) => {
      const app = await loadApp(appName);
      // Assumptions: Register the apps to be active on certain or all routes
      registerApplication(appName, app, location => location.pathname.startsWith('/'));
    });

    // After all micro frontends are registered, start the single-spa orchestrator
    start({ urlRerouteOnly: true });
  } catch (error) {
    console.error('Error in loading styleguide or micro frontends', error);
  }
};

// Initiate the registration of applications
registerMicroFrontends();



