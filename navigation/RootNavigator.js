import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import TabNavigator from './TabNavigator'
import Chat from '../screens/Chat.js'
import Signup from '../screens/Signup.js'
import Login from '../screens/Login.js'

const RootStackNavigator = createStackNavigator(
    {
        Main: {
            screen: TabNavigator
        },
        Chat: {
            screen: Chat
        },
        Signup: {
            screen: Signup
        }
    }
);

const AppContainer = createAppContainer(RootStackNavigator);

export default class RootNavigator extends React.Component {
    render() {
        return <AppContainer />;
    }
} 