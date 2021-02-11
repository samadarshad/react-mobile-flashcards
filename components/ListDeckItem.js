import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { List, Card, Title, Paragraph } from 'react-native-paper';
import { handleInitialData } from '../actions';
import { connect } from 'react-redux';

class ListDeckItem extends Component {
    render() {
        const { id, title, questionsLength, navigation, lastAttemptedDate, lastScore } = this.props
        const lastAttemptText = (lastAttemptedDate !== '' && lastScore !== '')
            ? `, last attempted ${lastAttemptedDate} with a score of ${lastScore}/${questionsLength}`
            : ``

        return (
            <Card onPress={() => navigation.navigate('DeckView', { id: id })} style={{ margin: 5 }}>
                <Card.Title title={title} subtitle={
                    `${questionsLength} questions${lastAttemptText}`
                } left={props => <List.Icon {...props} icon="folder" />} />
            </Card>
        )
    }
}
function mapStateToProps({ decks }, { id }) {
    return {
        id: id,
        title: decks[id].title,
        questionsLength: decks[id].questions.length,
        lastAttemptedDate: "today", //decks[id].lastAttemptedDate,
        lastScore: 1,//decks[id].lastScore,
    };
};

export default connect(mapStateToProps)(ListDeckItem);