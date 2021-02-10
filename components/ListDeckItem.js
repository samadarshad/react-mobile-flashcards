import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { List, Card, Title, Paragraph } from 'react-native-paper';
import { handleInitialData } from '../actions';
import { connect } from 'react-redux';

class ListDeckItem extends Component {
    render() {
        const { title, questionsLength, navigation } = this.props // pass in an id, get rest of data from redux store
        return (
            <Card onPress={() => navigation.navigate('DeckView', { title: title })} style={{ margin: 5 }}>
                <Card.Title title={title} subtitle={`${questionsLength} questions`} left={props => <List.Icon {...props} icon="folder" />} />
            </Card>
        )
    }
}
function mapStateToProps({ decks }, { id }) {
    return {
        title: decks[id].title,
        questionsLength: decks[id].questions.length
    };
};

export default connect(mapStateToProps)(ListDeckItem);