import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    Button,
    ToolbarAndroid
} from 'react-native';

import * as Actions from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class MyHomeTwo extends Component {

    constructor(props) {
        super(props)
    }

    requestChildOne = () => {
        this.props.getTabChildSecond();
    }

    componentDidUpdate() {
        this.props.navigation.navigate('HomeThree')
    }

    render() {
        return (
            <View style={styles.container}>

                {
                    Platform.OS === 'android' ?

                        <ToolbarAndroid style={styles.toolbarcontainer} contentInsetStart={0}>
                            <View style={styles.actionviewcontainer}>
                                <Text style={styles.actiontitlecontainer}>Home 1</Text>
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
                            onPress={this.requestChildOne}
                            title="Main Home Child One" />
                    </View>

                    <View style={[styles.buttoncontainer, { marginTop: 10 }]}>
                        <Button
                            color='red'
                            onPress={() => this.props.navigation.goBack()}
                            title="Go Back To Main Home" />
                    </View>
                </View>


            </View >
        );
    }
}

function mapStateToProps(state, props) {
    return {
        tabChildSecond: state.dataReducer.tabChildSecond
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(MyHomeTwo);

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

        marginLeft: Platform.OS === 'ios' ? 30 : 30,
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