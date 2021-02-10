import React, { Component } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { List, Card, Title, Paragraph } from 'react-native-paper';
import ListDecksView from './ListDecksView'
import AddDeckView from './AddDeckView'

const Tab = createMaterialBottomTabNavigator();

class Home extends Component {
    render() {
        return (
            <Tab.Navigator
                initialRouteName="ListDecksView"
                shifting={true}
                sceneAnimationEnabled={false}
            >
                <Tab.Screen
                    name="ListDecksView"
                    component={ListDecksView}
                    options={{
                        tabBarIcon: 'home-account',
                    }}
                />
                <Tab.Screen
                    name="AddDeckView"
                    component={AddDeckView}
                    options={{
                        tabBarIcon: 'bell-outline',
                    }}
                />
            </Tab.Navigator>
        );
    }
};

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
