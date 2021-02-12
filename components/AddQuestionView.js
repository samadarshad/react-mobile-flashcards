import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { connect } from 'react-redux';
import { Snackbar } from 'react-native-paper';
import { handleAddQuestion } from '../actions'

class AddQuestionView extends Component {
    state = {
        question: '',
        answer: '',
        popupVisible: false,
    }

    onSubmit = () => {
        this.props.dispatch(handleAddQuestion(this.props.id, this.state.question, this.state.answer))
        this.setState({
            question: '',
            answer: '',
            popupVisible: true,
        })
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
                <Button mode="contained" onPress={() => this.onSubmit()} style={{ margin: 10 }} disabled={this.state.question === '' || this.state.answer === ''}>
                    Submit
                </Button>
                <Snackbar
                    visible={this.state.popupVisible}
                    duration={3000}
                    onDismiss={() => this.setState({ popupVisible: false })}>
                    Question saved to deck.
                </Snackbar>
            </View>
        )
    }
}


function mapStateToProps({ }, { route }) {
    const id = route.params.id
    return {
        id,
    };
};

export default connect(mapStateToProps)(AddQuestionView);
