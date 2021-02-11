import { getDecks } from '../utils/api';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const SAVE_SCORE = 'SAVE_SCORE';

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