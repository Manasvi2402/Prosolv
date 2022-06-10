import * as React from 'react';
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import Login from './Screens/login';
import DashboardScreen from './Screens/dashboard';
import LoadingScreen from './Screens/loading';

import firebase from 'firebase';
import { firebaseConfig } from './config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app()
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  Login: Login,
  HomeScreen:HomeScreen,
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return (
    <AppNavigator />
  )
}
