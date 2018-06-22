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
    ToolbarAndroid
} from 'react-native';
import SwitchExample from './SwitchExample'

let iOSnavigationOptions = {
    title: 'Profile',
    headerLeft: null,
    headerStyle: {
        backgroundColor: '#3E8CF5'
    },
    tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('./images/user.png')}
            style={[styles.icon, { tintColor: tintColor }]} />)
};


let AndroidnavigationOptions = {
    header: true,
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('./images/user.png')}
            style={[styles.icon, { tintColor: tintColor }]} />)
};

export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            switch1Value: false,
            switch2Value: false,
        }
    }

    toggleSwitch1 = (value) => {
        this.setState({ switch1Value: value })
        console.log('Switch 1 is: ' + value)
    }

    toggleSwitch2 = (value) => {
        this.setState({ switch2Value: value })
        console.log('Switch 2 is: ' + value)
    }

    static navigationOptions = Platform.OS === 'ios' ? iOSnavigationOptions : AndroidnavigationOptions;

    render() {
        return (
            <View style={styles.container}>
                {
                    Platform.OS === 'android' ?

                        <ToolbarAndroid style={styles.toolbarcontainer} contentInsetStart={0}>
                            <View style={styles.actionviewcontainer}>
                                <Text style={styles.actiontitlecontainer}>Profile</Text>
                            </View>
                        </ToolbarAndroid>
                        :
                        null
                }
                <View style={{ flex: 1, flexDirection: 'column' }}>

                    <View style={styles.containerChild}>
                        <SwitchExample
                            toggleSwitch1={this.toggleSwitch1}
                            toggleSwitch2={this.toggleSwitch2}
                            switch1Value={this.state.switch1Value}
                            switch2Value={this.state.switch2Value} />
                    </View>

                    <View style={styles.containerChild}>
                        <Text style={{ alignSelf: 'center' }}> Profile</Text>
                    </View>

                    <View style={styles.containerChild}>
                        <Text style={styles.text}>
                            <Text style={styles.capitalLetter}>
                                L
                            </Text>

                            <Text>
                                orem ipsum dolor sit amet, sed do eiusmod.
                            </Text>

                            <Text>
                                Ut enim ad <Text style={styles.wordBold}>minim </Text> veniam,
                                quis aliquip ex ea commodo consequat.
                            </Text>

                            <Text style={styles.italicText}>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                            </Text>

                            <Text style={styles.textShadow}>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum.
                            </Text>
                        </Text>

                    </View>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    containerChild: {
        flex: 1,
        backgroundColor: 'white',
        marginLeft: 15,
        marginRight: 15,
        justifyContent: 'center'
    },
    icon: {
        width: 20,
        height: 20,
    },
    toolbarcontainer: {
        height: 35,
        backgroundColor: 'purple',
    },
    actionviewcontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    actiontitlecontainer: {
        color: 'white',
    },

    text: {
        color: '#41cdf4',
    },
    capitalLetter: {
        color: 'red',
        fontSize: 20
    },
    wordBold: {
        fontWeight: 'bold',
        color: 'black'
    },
    italicText: {
        color: '#37859b',
        fontStyle: 'italic'
    },
    textShadow: {
        textShadowColor: 'red',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5
    }
});