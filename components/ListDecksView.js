import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { List, Card, Title, Paragraph, Button } from 'react-native-paper';
import { handleInitialData } from '../actions';
import { connect } from 'react-redux';
import ListDeckItem from './ListDeckItem'
import { getDecks, seedStorage } from '../utils/api'

class ListDecksView extends Component {
    componentDidMount() {
        const { dispatch } = this.props

        dispatch(handleInitialData())
    };

    onSeedWithDummyData = () => {
        const { dispatch } = this.props
        seedStorage()
            .then(dispatch(handleInitialData()))
    }


    _renderItem = ({ item }) => (
        (item && Object.keys(item).length === 0 && item.constructor === Object)
            ? null
            : <ListDeckItem id={item.id} navigation={this.props.navigation} />
    );

    render() {
        if (this.props.decksArray.length === 0) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Title>Add a deck to get started</Title>
                    <Button onPress={this.onSeedWithDummyData}>Populate app with dummy data</Button>
                </View>
            )
        }

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    data={this.props.decksArray}
                    renderItem={this._renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </SafeAreaView>
        )


    }
}

function mapStateToProps({ decks }) {
    return {
        decksArray: Object.values(decks),
    };
};

export default connect(mapStateToProps)(ListDecksView);