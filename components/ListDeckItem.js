import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { List, Card, Title, Paragraph } from 'react-native-paper';
import { handleInitialData } from '../actions';
import { connect } from 'react-redux';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

class ListDeckItem extends Component {
    render() {
        const { id, title, questionsLength, navigation, lastAttemptedDate, lastScore } = this.props
        let subtitle, lastAttemptText
        subtitle = `${questionsLength} questions`

        if (lastAttemptedDate !== null) {
            lastAttemptText = (lastAttemptedDate !== '' && lastScore !== '')
                ? `\nLast attempted ${formatDistance(lastAttemptedDate, new Date())} ago with a score of ${lastScore}/${questionsLength}`
                : ``

            subtitle = `${subtitle}${lastAttemptText}`
        }


        return (
            <Card onPress={() => navigation.navigate('DeckView', { id: id })} style={{ margin: 5 }}>
                <Card.Title title={title} subtitle={subtitle} subtitleNumberOfLines={2}
                    left={props => <List.Icon {...props} icon="folder" />} />
            </Card>
        )
    }
}
function mapStateToProps({ decks }, { id }) {
    return {
        id: id,
        title: decks[id].title,
        questionsLength: decks[id]?.questions?.length ?? 0,
        lastAttemptedDate: decks[id]?.lastAttemptedDate ?? null,
        lastScore: decks[id]?.lastScore ?? null,
    };
};

export default connect(mapStateToProps)(ListDeckItem);