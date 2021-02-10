import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { Title, Subheading, Button } from 'react-native-paper';
import { color } from 'react-native-reanimated';
import { connect } from 'react-redux';

class QuizResult extends Component {

    render() {
        const { title, score, total, navigation } = this.props
        return (
            <View>
                <Text>
                    {title}, {score}, {total}
                </Text>
                <Button mode="contained" icon='home' onPress={() => navigation.navigate('Home')} style={{ margin: 10 }}>
                    Home
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

function mapStateToProps({ decks }, { id, navigation }) {
    return {
        id,
        navigation,
        title: decks[id].title,
        score: 1,
        total: decks[id].questions.length,
    };
};

export default connect(mapStateToProps)(QuizResult);