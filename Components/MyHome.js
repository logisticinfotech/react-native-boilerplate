import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    ToolbarAndroid,
    WebView
} from 'react-native';

import * as Actions from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
const Constants = require('./Constants');


class MyHome extends Component {

    constructor(props) {
        super(props)
    }

    requestChildOne = () => {
        this.props.getTabChild();
    }

    componentDidUpdate() {
        this.props.navigation.navigate('HomeTwo');
    }

    render() {
        return (
            <View style={styles.container}>

                {
                    Platform.OS === 'android' ?

                        <ToolbarAndroid style={styles.toolbarcontainer} contentInsetStart={0}>
                            <View style={styles.actionviewcontainer}>
                                <Text style={styles.actiontitlecontainer}>Home</Text>
                            </View>
                        </ToolbarAndroid>
                        :
                        null
                }
                <View style={styles.container}>
                    <View style={[styles.containerChild, { justifyContent: 'center' }]}>

                        <View style={styles.buttoncontainer}>
                            <Button
                                style={{ marginLeft: 10, marginRight: 10 }}
                                onPress={this.requestChildOne}
                                title="Main Home" />
                        </View>
                    </View>
                    <View style={[styles.containerChild, { flex: 2 }]}>
                        <View style={{ backgroundColor: 'gray', height: 1 }} />
                        <WebView
                            source={{
                                uri: 'https://www.google.com/?gws_rd=cr,ssl&ei=SICcV9_EFqqk6ASA3ZaABA#q=tutorialspoint'
                            }} />
                    </View>
                </View>
            </View>

        );
    }
}


function mapStateToProps(state, props) {
    return {
        tabChild: state.dataReducer.tabChild
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(MyHome);




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    containerChild: {
        flex: 1,
    },
    icon: {
        width: 15,
        height: 15,
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