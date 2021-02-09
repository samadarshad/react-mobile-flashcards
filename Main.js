import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

class ListDecksView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ListDecksViewa</Text>
            </View>
        )
    }
}

class AddDeckView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>AddDeckView</Text>
            </View>
        )
    }
}

const Tab = createMaterialBottomTabNavigator();

export const BottomTabs = () => {
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
};

const Stack = createStackNavigator();

const StackNav = () => (
    <Stack.Navigator initialRouteName="AddDeckView">
        <Stack.Screen
            name="AddDeckView"
            component={AddDeckView}
            options={{ headerTitle: 'AddDeckView' }}
        />
        <Stack.Screen
            name="ListDecksView"
            component={ListDecksView}
            options={{ headerTitle: 'ListDecksView' }}
        />
    </Stack.Navigator>
)

export default class Main extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <BottomTabs />
                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
