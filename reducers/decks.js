import { RECEIVE_DECKS, SAVE_SCORE } from '../actions';

function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case SAVE_SCORE:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    lastAttemptedDate: action.timestamp,
                    lastScore: action.score,
                }
            }
        default:
            return state
    }
}

export default decks