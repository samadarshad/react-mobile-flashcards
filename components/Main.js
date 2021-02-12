import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import MainStack from './MainStack'

export default class Main extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <MainStack />
                <StatusBar style="auto" />
            </View>
        );
    }
}

