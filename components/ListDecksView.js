import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { List, Card, Title, Paragraph } from 'react-native-paper';
import { handleInitialData } from '../actions';
import { connect } from 'react-redux';
import ListDeckItem from './ListDeckItem'
import { getDecks, seedStorage } from '../utils/api'

class ListDecksView extends Component {
    componentDidMount() {
        const { dispatch } = this.props
        // seedStorage()
        //     .then(dispatch(handleInitialData())) //temporary for development purposes only

        dispatch(handleInitialData())
    };

    _listEmptyComponent = () => {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Title>Add a deck to get started</Title>
            </View>
        )
    }

    _renderItem = ({ item }) => (
        (item && Object.keys(item).length === 0 && item.constructor === Object)
            ? null
            : <ListDeckItem id={item.id} navigation={this.props.navigation} />
    );

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    data={this.props.decksArray}
                    ListEmptyComponent={this._listEmptyComponent}
                    renderItem={this._renderItem}
                    keyExtractor={item => item?.id}
                />
            </SafeAreaView>
        );
    }
}

function mapStateToProps({ decks }) {
    return {
        decksArray: Object.values(decks),
    };
};

export default connect(mapStateToProps)(ListDecksView);