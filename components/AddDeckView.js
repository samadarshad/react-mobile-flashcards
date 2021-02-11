import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { List, Card, Title, Paragraph, Button, TextInput } from 'react-native-paper';
import { handleAddDeck } from '../actions';
import { connect } from 'react-redux';

class AddDeckView extends Component {
    state = {
        title: ''
    }

    onSubmit = () => {
        console.log("adding deck", this.state.title)
        this.props.dispatch(handleAddDeck(this.state.title))
        this.setState({
            title: ''
        })
        // get id
        // navigate to new deck
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
                <Button mode="contained" onPress={() => this.onSubmit()} style={{ margin: 10 }}>
                    Submit
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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

export default connect()(AddDeckView);