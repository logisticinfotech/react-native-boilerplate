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
    Image,
    Text,

} from 'react-native';

import { StackNavigator } from 'react-navigation';
import MyHome from './MyHome';
import MyHomeTwo from './MyHomeTwo';
import MyHomeThree from './MyHomeThree';
//import HomeRedux from './HomeRedux'

export const MyHomeMain = StackNavigator(
    {
        HomeOne: { screen: MyHome },
        HomeTwo: { screen: MyHomeTwo },
        HomeThree: { screen: MyHomeThree }
    },

    {
        navigationOptions: {
            header: false,
        },
    }
);

let iOSnavigationOptions = {
    title: 'Home',
    headerLeft: null,
    headerStyle: {
        backgroundColor: '#3E8CF5'
    },
    tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('./images/home.png')}
            style={[styles.icon, { tintColor: tintColor }]} />
    ),
};


let AndroidnavigationOptions = {
    header: true,
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('./images/home.png')}
            style={[styles.icon, { tintColor: tintColor }]} />
    ),
};

export default class Home extends Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = Platform.OS === 'ios' ? iOSnavigationOptions : AndroidnavigationOptions;

    render() {
        return (
            <MyHomeMain />
        )
    }

}

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
    },
});