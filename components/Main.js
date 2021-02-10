import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { List, Card, Title, Paragraph } from 'react-native-paper';
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

