import React from 'react';
import Profile from '../screens/Profile';
import Pack from '../screens/Pack'
import { createMaterialTopTabNavigator } from 'react-navigation';
 



export default createMaterialTopTabNavigator(
  {
    Profile: {
      screen: Profile,
    },
    Pack: {
      screen: Pack,
    }
  },
{
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#1b90cb',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
      },
    },
  }
);
