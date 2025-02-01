# Express Blog

## Packages & Libraries Used
- [Node](https://nodejs.org/): JavaScript runtime for executing server-side code
- [Express](https://expressjs.com/): A web framework for building Node.js applications
- [EJS](https://ejs.co/): Template engine for embedding JavaScript into HTML
- [SCSS](https://sass-lang.com/): A CSS preprocessor that adds features like variables and nesting
<br />
- [Nodemon](https://nodemon.io/): Auto-restarting the server during development
- [Gulp](https://gulpjs.com/): Managing SCSS, CSS minification, etc.

## Starting the project
- ### Development Mode
  To start the server in development mode, run the following command;
  `npm run dev`
  - Gulp will be ran in watch mode, there by watching changes in the SCSS files & re-build the css files to the destination directory.
  - Nodemon will run the app.js file watching for any changes and re-starting the server and listening for requests on port, specified in the .env file.

- ### Production Mode
  To start the server in production mode, run the following command;
  `npm run start`
  - Gulp will generate minified css files to the destination(public) director from the scss files from the source(src) directory.
  - After the css files are generated, node will run the app.js file, starting the server and listening for requests on port, specified in the .env file.
