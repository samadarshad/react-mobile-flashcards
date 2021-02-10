import React, { Component } from 'react';
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

export default ListDecksView
