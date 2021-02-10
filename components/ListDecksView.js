import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { List, Card, Title, Paragraph } from 'react-native-paper';


const state_data = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
}

class Item extends Component {
    render() {
        const { title, navigation } = this.props // pass in an id, get rest of data from redux store
        return (
            <Card onPress={() => navigation.navigate('DeckView', { title: title })} style={{ margin: 5 }}>
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
                    data={Object.values(state_data)}
                    renderItem={renderItem}
                    keyExtractor={item => item.title}
                />
            </SafeAreaView>
        );
    }
}

export default ListDecksView
