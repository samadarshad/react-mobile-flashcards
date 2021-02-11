import { getDecks, saveDeckTitle } from '../utils/api';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const SAVE_SCORE = 'SAVE_SCORE';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_DECK = 'ADD_DECK';

export function handleAddDeck(title) {
    return (dispatch) => {
        const deck = saveDeckTitle(title)
        dispatch(addDeck(deck))
        return Promise.resolve(deck.id)
    }
}

export function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

export function addQuestion(id, question, answer) {
    return {
        type: ADD_QUESTION,
        id,
        question,
        answer,
    }
}
export function saveScore(id, score, timestamp) {

    return {
        type: SAVE_SCORE,
        id,
        score,
        timestamp,
    };
};

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks,
    };
};

export function handleInitialData() {
    return (dispatch) => {
        const decks = getDecks()
        dispatch(receiveDecks(decks));
    }
}