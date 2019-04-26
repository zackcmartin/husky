import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import TabNavigator from './TabNavigator'
import Chat from '../screens/Chat.js'
// import Signup from '../screens/Signup.js'
// import Login from '../screens/Login.js'


export const HomeStack = createStackNavigator(
    {
        Main: {
            screen: TabNavigator
        },
        Chat: {
            screen: Chat
        },
        /*
        Signup: {
            screen: Signup
        }
        */
    }
);




const Root = createAppContainer(HomeStack);
/*
export default class RootNavigator extends React.Component {
    render() {
        return <AppContainer />;
    }
} 
*/

export default Root;

