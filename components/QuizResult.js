import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { Title, Subheading, Button } from 'react-native-paper';
import { color } from 'react-native-reanimated';
import { connect } from 'react-redux';

class QuizResult extends Component {

    render() {
        const { onRestart, id, title, score, total, navigation } = this.props
        return (
            <View>
                <Text>
                    {title}, {score}, {total}
                </Text>
                <Button mode="contained" icon='restart' onPress={() => onRestart()} style={{ margin: 10 }}>
                    Restart Quiz
                    </Button>
                <Button mode="contained" icon='folder' onPress={() => navigation.navigate('DeckView')} style={{ margin: 10 }}>
                    Back to Deck
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

function mapStateToProps({ decks }, { onRestart, id, navigation }) {
    return {
        onRestart,
        id,
        navigation,
        title: decks[id].title,
        score: 1,
        total: decks[id].questions.length,
    };
};

export default connect(mapStateToProps)(QuizResult);