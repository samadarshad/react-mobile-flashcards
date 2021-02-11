import AsyncStorage from '@react-native-async-storage/async-storage';

const DECK_STORAGE_KEY = 'ReactMobileFlashcards:decks';

const dummyDecks = {
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

function generateUID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function seedStorage() {
    return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(dummyDecks));
}
export function getDecks() {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then(JSON.parse)
        .then(({ decks }) => (decks))
};

export function setStorage(decks) {
    return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks));
}

export function getDeck(id) {
    return decks[id]
}

export function saveDeckTitle(title) {
    const id = generateUID()
    console.log("saving", title, id)
    return { id, title }
}

export function addCardToDeck(title, card) {
    console.log("saving", JSON.stringify(card))
    console.log("to", title)
    return
}