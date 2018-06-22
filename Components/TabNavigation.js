/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
} from 'react-native';

import { TabNavigator } from 'react-navigation';
import Home from './Home';
import Profile from './Profile';
import Setting from './Setting';
const Constants = require('./Constants');


const MyNav = TabNavigator(
    {
        Home: { screen: Home },
        Profile: { screen: Profile },
        Setting: { screen: Setting }, 
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
        
        tabBarOptions: {
            activeTintColor: 'yellow',
            indicatorStyle: {
                backgroundColor: 'yellow',
                height: 0
            },
            labelStyle: {
                fontSize: 8,
                color: "white",
            },
            scrollEnabled: false,
            showLabel: false,
            showIcon: true,
            style: {
                backgroundColor: 'purple',
            },
            
        },

    },
);

export default class TabNavigation extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <MyNav />
        );
    }
}

const styles = StyleSheet.create({

});