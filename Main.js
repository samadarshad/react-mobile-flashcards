import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { List } from 'react-native-paper';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

class Item extends Component {
    render() {
        const { title, navigation } = this.props // pass in an id, get rest of data from redux store
        debugger
        return (
            <List.Item
                title={title}
                description="get questions length"
                left={props => <List.Icon {...props} icon="folder" />}
                onPress={() => navigation.navigate('DeckView')}
            />
        )
    }
}

class DeckView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>this is a deck</Text>
            </View>
        )
    }
}

class ListDecksView extends Component {
    render() {

        const renderItem = ({ item }) => (
            <Item title={item.title} navigation={this.props.navigation} />
        );

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        );
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

export const Home = () => {
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

export default class Main extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StackNav />
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
