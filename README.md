
# React Microfrontends

This is a micro-frontend project using React and SPA. it consists of 7 microfrontends. It uses the create-single-spa
CLI: `https://single-spa.js.org/docs/create-single-spa/`

`root-config`, 
The root-config is essential in architectures that deploy micro frontends, as it fundamentally acts as the coordinator or 
glue that integrates all the disparate parts of the application into a cohesive whole.

`spacecraft`
This is the newly created microfrontend, shows a list of planets and their details associated wth star wars films
and the movies they appeared in. 

`people`
The people microfrontend of the application, shows a list of people and their details associated wth star wars films
and the movies they appeared in

`planets`
The planets microfrontend of the application, shows a list of planets and their details associated wth star wars films
and the movies they appeared in

`api`
This is a fake api which holds the data for the films, people, planets and spacecraft's json api's 

`navbar`
The navbar for the application

`styleguide`
This microfrontend uses tailwind to create global styles for all the microfrontends used to create consistant styling

This project also uses the chrome extension `single spa inspection` to manage modules and create overrides

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# Instructions for setting up the microfrontend project locally

1. Create a new folder locally to house all the microfrontends.

2. Clone all the microfrontends within the `https://github.com/React-micro-frontends-with-spa` repo into this
   new folder

3. For each microfrontend run `yarn` or `npm install`. Note if encountering webpack errors ensure you are using the node 
   versions listed below for each microfrontend. This is a consideration to be resolved in the future.

   `root-config`:       nodejs v18.12.0 
   `navbar`:            nodejs v18.12.0
   `styleguide`:        nodejs v18.12.0
   `api`:               nodejs v18.12.0

   `people`:            nodejs v18.12.0
   `planets`:           nodejs v16.15.1  
   `spacecraft`:        nodejs v16.15.1 


4. Once all the microfrontend repos are installed run `root-config` first using `yarn` or `npm start`, then run the remaining
   frontends in separate terminals. Ensure that all the microfrontends are running on the intended ports designated in the `index.ejs`
   file located in `root-config/src` folder

5. Now visit `localhost/9000` in the browser. You should now see the Star wars image along with the navbar containing the links
   for `people`, `planets` and `spacecraft`

6. install the `single spa inspection` browser extension. This will allow us to manage and override the microfrontend modules.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# Creating the Spacecraft microfrontend

The newly created Spacecraft microfrontend allows uses to see a list of spacecraft used in the star wars movies. It uses the same 
architecture and code design as the existing modules in order to fit in seamlessly. A new `spacecraft` api was created in the api 
module and it was adapted to cross reference the films api.

When a spacecraft is clicked from the list, it's details are displayed along with the images of the films that it was seen in. 
As with the `people` and `planets` modules, more spacecrafts can be loaded and added to the list using the button provided 
above the list.

Extra styling was added to this and the other microfrontends such as the bg image and new headings and enhanced theme and layout 
using the global styles in the `styleguide` module to make it all more visually appealing. 

# main challenges

The main challenge was getting the original repo to work correctly as it is no longer supported and hasn't been updated 
for more than 4 years. The implications of this were many including outdated libraries and discontinued features etc, which had to 
be resolved across all the modules in order to get them to play nicely together.

The repo also needed to be amended in the `root-config` module to include/contain correctly the microfrontends. Having not used single-spa
before this involved some research. So the repo was nowhere close to just cloning, installing and running locally, and this took up
most of the available time to get it all working

The new spacecraft module adheres mostly to best practices and standards it uses the `fetchWithCache.js` file to add better performance 
and the code is modular and organised efficiently. More could have been done though in this area if more time was available.

# Considerations for future improvements

As mentioned the code could be upgraded and enhanced to be more efficient in certain areas. The libraries shoulds also be updated
to use the latest node version.

The spacecraft module also needs to be tested using unit and integration methods, this was not possible due to time constraints.
In addition the map overrides should be preformed and tested to ensure that we could take full advantage of the microfrontend
architecture, testing with different versions of react in the browser as one example


