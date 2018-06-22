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
    Text,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';

import * as Actions from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
const Constants = require('./Constants');

class Login extends Component {
    constructor(props) {
        super(props)
    }

    loginRequest = () => {
        console.log('Login Props ::::::: ', this.props);

        this.props.getLoginRequest();
    }

    componentDidUpdate() {
        this.goToMainTabScreen();
    }

    goToMainTabScreen() {
        AsyncStorage.setItem(Constants.USER_DATA, 'LoginDone')
        this.props.onLoginPress();
    }


    render() {
        return (

            <View style={styles.container}>
                <View >
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={this.loginRequest}>

                        <Text style={styles.buttonText}>Press To Login</Text>

                    </TouchableOpacity>


                </View>
            </View>
        );
    }

}


function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        data: state.dataReducer.data,
        checkString: state.dataReducer.checkString
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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
    spinner: {
        flex: 1,
    }
});