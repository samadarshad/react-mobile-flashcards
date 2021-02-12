import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home'
import DeckView from './DeckView'
import QuizView from './QuizView'
import AddQuestionView from './AddQuestionView'

const Stack = createStackNavigator();

class MainStack extends Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerTitle: 'Home' }}
                />
                <Stack.Screen
                    name="DeckView"
                    component={DeckView}
                    options={{ headerTitle: 'Deck' }}
                />
                <Stack.Screen
                    name="QuizView"
                    component={QuizView}
                    options={{ headerTitle: 'Quiz' }}
                />
                <Stack.Screen
                    name="AddQuestionView"
                    component={AddQuestionView}
                    options={{ headerTitle: 'Add Question' }}
                />
            </Stack.Navigator>
        )
    }
}

export default MainStack 