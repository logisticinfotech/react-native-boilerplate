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
    TouchableOpacity,
    AsyncStorage,
    ToolbarAndroid,
} from 'react-native';
const Constants = require('./Constants');


let iOSnavigationOptions = {
    title: 'Setting',
    headerLeft: null,
    headerStyle: {
        backgroundColor: '#3E8CF5'
    },
    tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('./images/settings.png')}
            style={[styles.icon, { tintColor: tintColor }]} />)
};


let AndroidnavigationOptions = {
    header: true,
    tabBarLabel: 'Setting',
    tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('./images/settings.png')}
            style={[styles.icon, { tintColor: tintColor }]} />
    ),
};

export default class Setting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            initialPosition: 'unknown',
            lastPosition: 'unknown',
            latitude: 'unknown',
            longitude: 'unknown',
            currentlatitude: 'unknown',
            currentlongitude: 'unknown',
            user: ''
        }
    }

    static navigationOptions = Platform.OS === 'ios' ? iOSnavigationOptions : AndroidnavigationOptions;


    logOutRequest = () => {
        AsyncStorage.removeItem(Constants.USER_DATA);
        Constants.emitter.emit(Constants.LOGOUT_EVENT, 'ok');  // Listener prints "5 10". 
    }


    watchID: ?number = null;

    componentDidMount = () => {

        navigator.geolocation.getCurrentPosition((position) => {
            const initialPosition = JSON.stringify(position);
            console.log('this is initial Response :--->', position.coords.latitude);

            this.setState({
                initialPosition: initialPosition,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
        },
            (error) => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );

        this.watchID = navigator.geolocation.watchPosition((position) => {
            const lastPosition = JSON.stringify(position);
            this.setState({
                lastPosition: lastPosition,
                currentlatitude: position.coords.latitude,
                currentlongitude: position.coords.longitude,

            });
        });

    }

    componentWillUnmount = () => {
        navigator.geolocation.clearWatch(this.watchID);
    }

    updateUser = (user) => {
        this.setState({ user: user })
    }

    render() {
        return (
            <View style={styles.container}>

                {
                    Platform.OS === 'android' ?

                        <ToolbarAndroid style={styles.toolbarcontainer} contentInsetStart={0}>
                            <View style={styles.actionviewcontainer}>
                                <Text style={styles.actiontitlecontainer}>Setting</Text>
                            </View>
                        </ToolbarAndroid>
                        :
                        null
                }

                <View style={styles.container}>

                    <View style={styles.containerChild}>
                        <Text style={styles.boldText}>
                            Initial position:
                        </Text>
                        <View style={{ backgroundColor: 'gray', height: 1, alignSelf: 'stretch', marginBottom: 15, marginTop: 10 }} />
                        <Text>
                            {'Lati:->' + this.state.latitude}
                        </Text>
                        <Text>
                            {'Long:->' + this.state.longitude}
                        </Text>

                        <Text style={styles.boldText}>
                            Current position:
                        </Text>
                        <View style={{ backgroundColor: 'gray', height: 1, alignSelf: 'stretch', marginBottom: 15, marginTop: 10 }} />
                        <Text>
                            {'Current Lati:->' + this.state.currentlatitude}
                        </Text>
                        <Text>
                            {'Current Longi:->' + this.state.currentlongitude}
                        </Text>
                    </View>

                    <View style={styles.containerChild}>

                        <TouchableOpacity
                            style={styles.buttonContainer}
                            onPress={this.logOutRequest}>

                            <Text style={styles.buttonText}>Press To Logout</Text>

                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    containerChild: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 15,
        marginRight: 15,
    },
    buttonContainer: {
        backgroundColor: 'purple',
        borderRadius: 6,
        padding: 10,
        marginLeft: 15,
        marginRight: 15,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
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
    boldText: {
        fontSize: 20,
        color: 'red',
    },

});