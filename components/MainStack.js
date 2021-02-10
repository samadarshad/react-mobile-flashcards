import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home'
import DeckView from './DeckView'

const Stack = createStackNavigator();

class MainStack extends Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="ListDecksView">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerTitle: 'Home' }}
                />
                <Stack.Screen
                    name="DeckView"
                    component={DeckView}
                    options={{ headerTitle: 'DeckView' }}
                />
            </Stack.Navigator>
        )
    }
}

export default MainStack 