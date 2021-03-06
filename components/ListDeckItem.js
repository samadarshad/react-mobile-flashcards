import React, { Component } from 'react';
import { List, Card } from 'react-native-paper';
import { connect } from 'react-redux';
import { makeSubtitle } from '../utils/helper'

class ListDeckItem extends Component {
    render() {
        const { id, title, questionsLength, navigation, lastAttemptedDate, lastScore } = this.props
        const subtitle = makeSubtitle(lastAttemptedDate, lastScore, questionsLength)

        return (
            <Card onPress={() => navigation.navigate('DeckView', { id: id })} style={{ margin: 5 }}>
                <Card.Title title={title} subtitle={subtitle} subtitleNumberOfLines={3}
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