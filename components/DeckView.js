import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { Title, Subheading, Button } from 'react-native-paper';
import { connect } from 'react-redux';

class DeckView extends Component {
    render() {
        const { id, title, lastAttemptedDate, lastScore, questionsLength, navigation } = this.props

        return (
            <View style={styles.container}>
                <Title>{title}</Title>
                <Subheading style={{ textAlign: 'center' }}>{`${questionsLength} questions\nLast attempted ${lastAttemptedDate} with a score of ${lastScore}/${questionsLength}`}</Subheading>

                <Button icon="card-plus" mode="outlined" onPress={() => navigation.navigate('AddQuestionView')} style={{ margin: 10 }}>
                    Add Card
            </Button>
                <Button mode="contained" onPress={() => navigation.navigate('QuizView', { id: id })} style={{ margin: 10 }}>
                    Start Quiz
            </Button>
                <Button icon="folder-remove" mode="text" onPress={() => console.log('delete deck')} style={{ margin: 10 }}>
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


function mapStateToProps({ decks }, { route }) {
    const id = route.params.id
    return {
        id: id,
        title: decks[id].title,
        questionsLength: decks[id].questions.length,
        lastAttemptedDate: "Today",
        lastScore: 1,
    };
};

export default connect(mapStateToProps)(DeckView);