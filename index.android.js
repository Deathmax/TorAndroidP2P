// import React, { Component } from 'react';
// import { AppRegistry, StyleSheet, Text, View } from 'react-native';
// import TodoApp from './src/app';

// AppRegistry.registerComponent('TorAndroidP2P', () => TodoApp);

import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/screens';

registerScreens(); // this is where you register all of your app's screens

Navigation.startSingleScreenApp({
  screen: {
    screen: 'torlist.MainListScreen', // unique ID registered with Navigation.registerScreen
    title: 'TorTodo', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
  passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
  animationType: ' none' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
});