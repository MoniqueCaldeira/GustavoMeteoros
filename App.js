import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import EEIScreen from "./screens/EEI";
import HomeScreen from "./screens/HomeScreen";
import Meteoro from "./screens/Meteoro";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default class App extends React.Component {

  render () {

    return (

      <NavigationContainer>
      
      <Stack.Navigator

      initialRouteName = "HomeScreen"

      screenOptions = {{headerShown:false}}>

      <Stack.Screen name = "HomeScreen" component = {HomeScreen}/>
      <Stack.Screen name = "EEIScreen" component = {EEIScreen}/>
      <Stack.Screen name = "Meteoro" component = {Meteoro}/>

      </Stack.Navigator>
      
      </NavigationContainer>
    );
  }
}


const styles = StyleSheet.create({

  container: {

    justifyContent: 'center',
}});
