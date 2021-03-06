import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Subheading, Button } from 'react-native-paper';
import { connect } from 'react-redux';
import { makeSubtitle } from '../utils/helper'
import { handleDeleteDeck } from '../actions'

class DeckView extends Component {

    onDelete = () => {
        this.props.navigation.navigate('Home', { screen: 'My Decks' })
        this.props.dispatch(handleDeleteDeck(this.props.id))
    }

    shouldComponentUpdate() {
        return this.props.exists
    }
    render() {
        const { id, title, lastAttemptedDate, lastScore, questionsLength, navigation } = this.props
        const subtitle = makeSubtitle(lastAttemptedDate, lastScore, questionsLength)

        return (
            <View style={styles.container}>
                <Title>{title}</Title>
                <Subheading style={{ textAlign: 'center' }}>{subtitle}</Subheading>

                <Button icon="card-plus" mode="outlined" onPress={() => navigation.navigate('AddQuestionView', { id: id })} style={{ margin: 10 }}>
                    Add Card
            </Button>
                <Button mode="contained" disabled={questionsLength === 0} onPress={() => navigation.navigate('QuizView', { id: id })} style={{ margin: 10 }}>
                    Start Quiz
            </Button>
                <Button icon="folder-remove" mode="text" onPress={() => this.onDelete()} style={{ margin: 10 }}>
                    Delete Deck
            </Button>

            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


function mapStateToProps({ decks }, { route }) {
    const id = route.params.id
    return {
        id: id,
        exists: typeof decks[id] !== 'undefined',
        title: decks[id]?.title,
        questionsLength: decks[id]?.questions?.length ?? 0,
        lastAttemptedDate: decks[id]?.lastAttemptedDate ?? null,
        lastScore: decks[id]?.lastScore ?? null,
    };
};

export default connect(mapStateToProps)(DeckView);