import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { List, Card, Title, Paragraph, Button, TextInput } from 'react-native-paper';

class AddQuestionView extends Component {
    state = {
        question: '',
        answer: '',
    }
    render() {
        return (
            <View style={{
                flex: 1, marginHorizontal: 50, justifyContent: 'center'
            }}>
                <TextInput
                    label="Question"
                    value={this.state.question}
                    onChangeText={question => this.setState({ question })}
                    style={{ marginBottom: 10 }}
                />
                <TextInput
                    label="Answer"
                    value={this.state.answer}
                    onChangeText={answer => this.setState({ answer })}
                />
                <Button mode="contained" onPress={() => console.log('submit new qn')} style={{ margin: 10 }}>
                    Submit
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

export default AddQuestionView