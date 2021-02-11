import { getDecks, saveDeckTitle, setStorage } from '../utils/api';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const SAVE_SCORE = 'SAVE_SCORE';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_DECK = 'ADD_DECK';
export const DELETE_DECK = 'DELETE_DECK';

export function handleDeleteDeck(id) {
    return (dispatch, getState) => {
        dispatch(deleteDeck(id))
        setStorage(getState())
    }
}

export function deleteDeck(id) {
    return {
        type: DELETE_DECK,
        id
    }
}

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
        return getDecks()
            .then(({ decks }) => {
                console.log("handleInitialData", decks)
                dispatch(receiveDecks(decks));
            })
    }
}