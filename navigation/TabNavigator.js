import React from 'react';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Matches from '../screens/Matches';
import { createBottomTabNavigator } from 'react-navigation';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../styles';

import { Image } from 'react-native';
 



export default createBottomTabNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <MaterialCommunityIcons color ={'#1b90cb'} name={focused ? 'account' : 'account-outline'} size={38}/> 
        )
      },
    },

    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon:  <Image style={styles.logo} source={require('../assets/huskyLogo.png')}/> 
      }
    },

    Matches: {
      screen: Matches,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <MaterialIcons color={'#1b90cb'} name={focused ? 'chat-bubble' : 'chat-bubble-outline'} size={30}/>
        )
    },
  }
},
{
    navigationOptions: {
      header: null
    },
    tabBarPosition: 'bottom',
    initialRouteName: 'Home',
    animationEnabled: true,
    swipeEnabled: false,
    tabBarOptions: {
      upperCaseLabel: false,
      style: {
        height: 40,
        backgroundColor: '#fff',
      },
      showLabel: false,
    }
  }
);