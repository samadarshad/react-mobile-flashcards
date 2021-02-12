import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Title, Subheading, Button } from 'react-native-paper';
class AnswerView extends Component {
    render() {
        const { navigation } = this.props
        return (
            <View style={{ flex: 1 }}>
                <Subheading style={{ margin: 10 }}>2 / 2</Subheading>
                <View style={styles.container}>
                    <Title>get answer</Title>
                    <Button mode="text" onPress={() => navigation.navigate('QuizView')} style={{ margin: 10 }}  >
                        <Text style={{ color: 'red' }}>
                            Question
                    </Text>
                    </Button>
                    <Button mode="contained" onPress={() => console.log('correct')} style={{ margin: 10, backgroundColor: 'green' }}>
                        Correct
            </Button>
                    <Button mode="contained" onPress={() => console.log('incorrect')} style={{ margin: 10, backgroundColor: 'red' }}>
                        Incorrect
            </Button>
                </View>
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
});


export default AnswerView