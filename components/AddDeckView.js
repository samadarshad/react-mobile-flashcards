import React, { Component } from 'react';
import { View } from 'react-native';
import { Title, Button, TextInput } from 'react-native-paper';
import { handleAddDeck } from '../actions';
import { connect } from 'react-redux';

class AddDeckView extends Component {
    state = {
        title: ''
    }

    onSubmit = () => {
        this.setState({
            title: ''
        })
        const id = this.props.dispatch(handleAddDeck(this.state.title))
        this.props.navigation.navigate('Home', { screen: 'My Decks' })
        this.props.navigation.navigate('DeckView', { id: id })
    }
    render() {
        return (
            <View style={{
                flex: 1, marginHorizontal: 50, justifyContent: 'center'
            }}>
                <Title style={{ textAlign: 'center' }}>What is the title of your new deck?</Title>
                <TextInput
                    label="Deck Title"
                    value={this.state.title}
                    onChangeText={title => this.setState({ title })}
                />
                <Button mode="contained" disabled={this.state.title === ''} onPress={() => this.onSubmit()} style={{ margin: 10 }}>
                    Submit
                </Button>
            </View>
        )
    }
}


export default connect()(AddDeckView);