import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Title, Subheading, Button } from 'react-native-paper';
import { connect } from 'react-redux';
import QuizResult from './QuizResult'
import { handleSaveScore } from '../actions'
import { moveNotificationToTomorrow } from '../utils/notifications'
import CardFlip from 'react-native-card-flip';

class QuizView extends Component {
    state = {
        questionIndex: 0,
        numCorrect: 0,
        isEndOfQuiz: false,
    }

    componentDidMount() {
        if (this.props.isRestart) {
            this.onRestart()
        }
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
            numCorrect: 0,
            isEndOfQuiz: false
        })
    }
    onEndOfQuiz = () => {
        const timestamp = Date.now()
        this.props.dispatch(handleSaveScore(this.props.id, this.state.numCorrect, timestamp))
        this.setState({
            isEndOfQuiz: true
        })

        // reset notification once a quiz has been completed
        moveNotificationToTomorrow()
    }

    render() {
        if (this.state.isEndOfQuiz) {
            const { id, navigation } = this.props
            return (
                <QuizResult onRestart={this.onRestart} id={id} navigation={navigation} />
            )
        } else {
            const { questionIndex } = this.state
            const { questions } = this.props
            const questionNumber = questionIndex + 1
            const question = questions[questionIndex]?.question
            const answer = questions[questionIndex]?.answer
            const questionsLength = questions.length

            return (
                <View style={{ flex: 1 }}>
                    <Subheading style={{ margin: 10 }}>{questionNumber} / {questionsLength}</Subheading>
                    <View style={styles.container}>

                        <CardFlip style={styles.cardContainer} ref={(card) => this.card = card} >
                            <TouchableOpacity style={styles.card} onPress={() => this.card.flip()} >
                                <Title style={{ textAlign: 'center' }}>{question}</Title>
                                <Subheading style={{ textAlign: 'center', color: 'red' }}>
                                    See Answer
                                    </Subheading>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.card} onPress={() => this.card.flip()} >
                                <Title style={{ textAlign: 'center', }}>{answer}</Title>
                                <Subheading style={{ textAlign: 'center', color: 'red' }}>
                                    See Question
                                    </Subheading>
                            </TouchableOpacity>

                        </CardFlip>
                        <View style={{ flex: 0.3 }}>
                            <Button icon="check" mode="contained" onPress={() => this.onCorrect()} style={{ margin: 10, backgroundColor: 'green' }}>
                                I got it right
                        </Button>
                            <Button icon="close" mode="contained" onPress={() => this.onIncorrect()} style={{ margin: 10, backgroundColor: 'red' }}>
                                Not this time
                        </Button>
                        </View>
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
    cardContainer: {
        flex: 0.7,
        width: 320,
        height: 400,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.5,
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