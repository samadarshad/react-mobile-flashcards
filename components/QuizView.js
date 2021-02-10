import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { Title, Subheading, Button } from 'react-native-paper';
import { color } from 'react-native-reanimated';
import { connect } from 'react-redux';

class QuizView extends Component {
    render() {
        const { id, questionIndex, question, answer, questionsLength, navigation } = this.props

        return (
            <View style={{ flex: 1 }}>
                <Subheading style={{ margin: 10 }}>{questionIndex} / {questionsLength}</Subheading>
                <View style={styles.container}>


                    <Title>{question}</Title>
                    <Button mode="text" onPress={() => console.log("show answer")} style={{ margin: 10 }}  >
                        <Text style={{ color: 'red' }}>
                            Answer
                    </Text>
                    </Button>
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
    const questionIndex = route.params.questionIndex
    return {
        id: id,
        questionIndex: questionIndex,
        question: decks[id].questions[questionIndex].question,
        answer: decks[id].questions[questionIndex].answer,
        questionsLength: decks[id].questions.length
    };
};

export default connect(mapStateToProps)(QuizView);