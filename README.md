# Universal React App - simple setup

A simple way to experiment with reusing code between react-native and web.
Has not been tested on Android.

Heavily inspired by https://github.com/callstack/universal-react-app
but without the haul because I wasn't sure what it was.

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

react-scripts from [Create React App](https://github.com/facebookincubator/create-react-app) were added to make this a web project as well w/ 0 config.

react-scripts expects an entry point of src/index.js - so this is the web entry point. App.js in root is the react-native entry point - not very descriptive names but it's what's expected by react-scripts and react-native-scripts.
