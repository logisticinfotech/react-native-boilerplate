/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';
import Login from './Components/Login';
import TabNavigation from './Components/TabNavigation';
const Constants = require('./Components/Constants');

import { Provider } from 'react-redux';
import store from './store'



export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLogin: false,
      isLoading: true
    }

    context = this;
    Constants.emitter.addListener(Constants.LOGOUT_EVENT,
      function (x) {
        console.log(x);
        context.setState({ isLogin: false });
      });
  }

  componentWillMount() {
    AsyncStorage.getItem(Constants.USER_DATA)
      .then((value) => {
        if (value != null) {
          this.setState({
            isLogin: true,
            isLoading: false,
          });

        } else {
          this.setState({
            isLogin: false,
            isLoading: false,
          });
        }
      }
      );
  }

  loginRequest = () => {
    this.setState({
      isLogin: true
    });
  }

  logoutRequest = () => {
    this.setState({
      isLogin: false
    });
  }

  render() {

    if (this.state.isLoading) {
      return (
        <View style={styles.container}>

          <ActivityIndicator size='large' color='purple' />
        </View>
      );
    } else {
      if (this.state.isLogin) {
        return (
          <Provider store={store}>
            <TabNavigation onLogoutPress={this.logoutRequest} />
          </Provider>
        );
      } else {
        return (
          <Provider store={store}>
            <Login onLoginPress={this.loginRequest} />
          </Provider>
        );
      }
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  }
});

