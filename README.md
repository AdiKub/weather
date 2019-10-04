   This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts


### After loading install all dependencies

```sh
$ npm install 
```

### Runs the app in the development mode

```sh
$ npm start 
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### Launches the test runner in the interactive watch mode
```sh
$ npm test 
``` 

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Builds the app for production to the `build` folder
```sh
$ npm run build 
``` 
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### If you aren’t satisfied with the build tool and configuration choices, you can eject at any time
```sh
$ npm run eject 
``` 
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Weather project uses a number of open source libraries to work properly:

* [react-redux] - Redux is a predictable state container for JavaScript apps.
* [reactjs-places-autocomplete] - A React component to build a customized UI for Google Maps Places Autocomplete.
* [redux-logger] - is a production Redux logging tool that lets you replay problems as if they happened in your own browser.
* [axios] - Make XMLHttpRequests from the browse.
* [redux-saga] - is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.
* [moment] - Parse, validate, manipulate, and display dates and times in JavaScript.
* [google-map-react]  is a component written over a small set of the Google Maps API. It allows you to render any React component on the Google Map.
* [country-list] - Countries, Languages & Continents data

# Attention 

- reactjs-places-autocomplete
- google-map-react
- axios 

needs key for work. you must create a file called .env in the root of your project's directory. Inside the .env file, write follows  

```sh
REACT_APP_GOOGLE_MAP_KEY = 'yourkey'
REACT_APP_OPENWEATHER_API_KEY = 'yourkey'
```
   