import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { Title, Subheading, Button } from 'react-native-paper';
import { color } from 'react-native-reanimated';
import { connect } from 'react-redux';
import QuizResult from './QuizResult'
import { handleSaveScore } from '../actions'

class QuizView extends Component {
    state = {
        showingAnswer: false,
        questionIndex: 0,
        numCorrect: 0,
        isEndOfQuiz: false,
    }

    componentDidMount() {
        if (this.props.isRestart) {
            this.onRestart()
        }
    }

    onToggleAnswer = () => {
        this.setState((prevState) => {
            return {
                showingAnswer: !prevState.showingAnswer
            }
        })
    }

    onCorrect = () => {
        this.setState((prevState) => {
            return {
                numCorrect: prevState.numCorrect + 1,
                questionIndex: prevState.questionIndex + 1,
            }
        })
    }

    onIncorrect = () => {
        this.setState((prevState) => {
            return {
                questionIndex: prevState.questionIndex + 1,
            }
        })
    }

    componentDidUpdate() {
        if ((this.state.questionIndex === this.props.questions.length) && !this.state.isEndOfQuiz) {
            this.onEndOfQuiz()
        }
    }

    onRestart = () => {
        this.setState({
            questionIndex: 0,
            isEndOfQuiz: false
        })
    }
    onEndOfQuiz = () => {
        const timestamp = Date.now()
        this.props.dispatch(handleSaveScore(this.props.id, this.state.numCorrect, timestamp))
        this.setState({
            isEndOfQuiz: true
        })
    }

    render() {
        if (this.state.isEndOfQuiz) {
            const { id, navigation } = this.props
            return (
                <QuizResult onRestart={this.onRestart} id={id} navigation={navigation} />
            )
        } else {
            const { showingAnswer, questionIndex } = this.state
            const { questions } = this.props
            const questionNumber = questionIndex + 1
            const question = questions[questionIndex]?.question
            const answer = questions[questionIndex]?.answer
            const questionsLength = questions.length

            return (
                <View style={{ flex: 1 }}>
                    <Subheading style={{ margin: 10 }}>{questionNumber} / {questionsLength}</Subheading>
                    <View style={styles.container}>
                        {showingAnswer
                            ?
                            <>
                                <Title style={{ textAlign: 'center' }}>{answer}</Title>
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
                        <Button icon="check" mode="contained" onPress={() => this.onCorrect()} style={{ margin: 10, backgroundColor: 'green' }}>
                            I got it right
                        </Button>
                        <Button icon="close" mode="contained" onPress={() => this.onIncorrect()} style={{ margin: 10, backgroundColor: 'red' }}>
                            Not this time
                        </Button>
                    </View>
                </View>
            )
        }
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
    const isRestart = route.params.isRestart ?? true
    return {
        id,
        isRestart,
        questions: decks[id].questions
    };
};

export default connect(mapStateToProps)(QuizView);