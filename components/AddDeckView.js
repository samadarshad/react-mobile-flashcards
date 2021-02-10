import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { List, Card, Title, Paragraph, Button, TextInput } from 'react-native-paper';

class AddDeckView extends Component {
    state = {
        text: ''
    }
    render() {
        return (
            <View style={{
                flex: 1, marginHorizontal: 50, justifyContent: 'center'
            }}>
                <Title style={{ textAlign: 'center' }}>What is the title of your new deck?</Title>
                <TextInput
                    label="Deck Title"
                    value={this.state.text}
                    onChangeText={text => this.setState({ text })}
                />
                <Button mode="contained" onPress={() => console.log('submit new deck')} style={{ margin: 10 }}>
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

export default AddDeckView