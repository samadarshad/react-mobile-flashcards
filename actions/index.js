import { getDecks } from '../utils/api';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';

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