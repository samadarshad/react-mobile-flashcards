import React, { Component } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StyleSheet } from 'react-native';
import ListDecksView from './ListDecksView'
import AddDeckView from './AddDeckView'

const Tab = createMaterialBottomTabNavigator();

class Home extends Component {
    render() {
        return (
            <Tab.Navigator
                initialRouteName="My Decks"
                shifting={true}
                sceneAnimationEnabled={false}
            >
                <Tab.Screen
                    name="My Decks"
                    component={ListDecksView}
                    options={{
                        tabBarIcon: 'home',
                    }}
                />
                <Tab.Screen
                    name="Add New Deck"
                    component={AddDeckView}
                    options={{
                        tabBarIcon: 'folder-plus',
                    }}
                />
            </Tab.Navigator>
        );
    }
};

export default Home


