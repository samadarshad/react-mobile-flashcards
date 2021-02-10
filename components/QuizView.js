import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { Title, Subheading, Button } from 'react-native-paper';
import { color } from 'react-native-reanimated';
import { connect } from 'react-redux';

class QuizView extends Component {
    state = {
        showingAnswer: false,
        questionIndex: 0,
    }

    onToggleAnswer = () => {
        this.setState((prevState) => {
            return {
                showingAnswer: !prevState.showingAnswer
            }
        })
    }
    render() {
        const { showingAnswer, questionIndex } = this.state
        const { id, questions, navigation } = this.props
        const questionNumber = questionIndex + 1
        const question = questions[questionIndex].question
        const answer = questions[questionIndex].answer
        const questionsLength = questions.length

        return (
            <View style={{ flex: 1 }}>
                <Subheading style={{ margin: 10 }}>{questionNumber} / {questionsLength}</Subheading>
                <View style={styles.container}>
                    {showingAnswer
                        ?
                        <>
                            <Title>{answer}</Title>
                            <Button mode="text" onPress={() => this.onToggleAnswer()} style={{ margin: 10 }}  >
                                <Text style={{ color: 'red' }}>
                                    Question
                    </Text>

                            </Button>
                        </>
                        :
                        <>
                            <Title>{question}</Title>
                            <Button mode="text" onPress={() => this.onToggleAnswer()} style={{ margin: 10 }}  >
                                <Text style={{ color: 'red' }}>
                                    Answer
                    </Text>

                            </Button>
                        </>
                    }
                    <Button icon="check" mode="contained" onPress={() => console.log('correct')} style={{ margin: 10, backgroundColor: 'green' }}>
                        I got it right
            </Button>
                    <Button icon="close" mode="contained" onPress={() => console.log('incorrect')} style={{ margin: 10, backgroundColor: 'red' }}>
                        Not this time
            </Button>
                </View>
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
        questions: decks[id].questions
    };
};

export default connect(mapStateToProps)(QuizView);