import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { Title, Subheading, Button } from 'react-native-paper';
import { color } from 'react-native-reanimated';
class QuizView extends Component {
    render() {
        const { navigation } = this.props
        return (
            <View style={{ flex: 1 }}>
                <Subheading style={{ margin: 10 }}>2 / 2</Subheading>
                <View style={styles.container}>


                    <Title>get title</Title>
                    <Button mode="text" onPress={() => navigation.navigate('AnswerView')} style={{ margin: 10 }}  >
                        <Text style={{ color: 'red' }}>
                            Answer
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


export default QuizView