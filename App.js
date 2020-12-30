import React from 'react';
import { Text, View } from 'react-native';
import BookTransactionScreen from "./screens/BookTransactionScreen";
import SearchScreen from "./screens/SearchScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction: {screen: BookTransactionScreen},
  Search: {screen: SearchScreen},
})

const AppContainer = createAppContainer(TabNavigator);
