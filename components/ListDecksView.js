import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { List, Card, Title, Paragraph } from 'react-native-paper';
import { handleInitialData } from '../actions';
import { connect } from 'react-redux';
import ListDeckItem from './ListDeckItem'

class ListDecksView extends Component {
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(handleInitialData())
    };
    render() {
        const { decksArray } = this.props
        const renderItem = ({ item }) => (
            <ListDeckItem id={item.id} navigation={this.props.navigation} />
        );

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    data={decksArray}
                    renderItem={renderItem}
                    keyExtractor={item => item.title}
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