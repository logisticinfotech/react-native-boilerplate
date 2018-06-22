import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    Button,
    ToolbarAndroid
} from 'react-native';


export default class MyHomeThree extends Component {

    _buttonClick = () => {
        console.log('stop here')
    }

    render() {
        return (
            <View style={styles.container}>

                {
                    Platform.OS === 'android' ?

                        <ToolbarAndroid style={styles.toolbarcontainer} contentInsetStart={0}>
                            <View style={styles.actionviewcontainer}>
                                <Text style={styles.actiontitlecontainer}>Home 2</Text>
                            </View>
                        </ToolbarAndroid>
                        :
                        null
                }
                <View style={styles.container}>
                    <View style={styles.buttoncontainer}>
                        <Button
                            color='green'
                            //onPress={() => this.props.navigation.navigate('HomeThree')}
                            onPress={this._buttonClick}
                            title="Stop Cycle" />
                    </View>

                    <View style={[styles.buttoncontainer, { marginTop: 10 }]}>
                        <Button
                            color='red'
                            onPress={() => this.props.navigation.goBack()}
                            title="Go Back To Main Home One" />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'white'
    },
    textcontainer: {
        textAlign: 'center'
    },
    buttoncontainer: {
        marginLeft: 30,
        marginRight: 30,
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

});