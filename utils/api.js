import AsyncStorage from '@react-native-async-storage/async-storage';

const STATE_STORAGE_KEY = 'ReactMobileFlashcards:state';

const dummyState = {
    decks: {
        0: {
            id: 0,
            title: 'React',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                },
                {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'The componentDidMount lifecycle event'
                }
            ],
            lastAttemptedDate: '',
            lastScore: '',
        },
        1: {
            id: 1,
            title: 'JavaScript',
            questions: [
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
            ],
            lastAttemptedDate: '',
            lastScore: '',
        }
    }
}

export function generateUID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function seedStorage() {
    return AsyncStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(dummyState));
}

export function getDecks() {
    return AsyncStorage.getItem(STATE_STORAGE_KEY)
        .then(JSON.parse)
        .then((results) => {
            return results.decks
        })
};

export function setStorage(state) {
    return AsyncStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(state));
}
