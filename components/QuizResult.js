import React, { Component } from 'react';
import { View } from 'react-native';
import { Title, Subheading, Button } from 'react-native-paper';
import { connect } from 'react-redux';

class QuizResult extends Component {

    render() {
        const { onRestart, title, score, total, navigation } = this.props
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Title>
                    Your scored {score} out of {total}
                </Title>
                <Subheading>
                    {title}
                </Subheading>
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


function mapStateToProps({ decks }, { onRestart, id, navigation }) {
    return {
        onRestart,
        id,
        navigation,
        title: decks[id].title,
        score: decks[id].lastScore,
        total: decks[id].questions.length,
    };
};

export default connect(mapStateToProps)(QuizResult);