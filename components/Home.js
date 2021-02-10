import React, { Component } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { List, Card, Title, Paragraph } from 'react-native-paper';


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
        return (
            <Card onPress={() => navigation.navigate('DeckView')} style={{ margin: 5 }}>
                <Card.Title title={title} subtitle="get questions length" left={props => <List.Icon {...props} icon="folder" />} />
            </Card>
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
