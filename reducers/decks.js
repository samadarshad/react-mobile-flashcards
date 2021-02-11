import { RECEIVE_DECKS, SAVE_SCORE, ADD_QUESTION, ADD_DECK } from '../actions';

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
        case ADD_QUESTION: {
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    questions: [
                        ...state[action.id].questions,
                        {
                            question: action.question,
                            answer: action.answer,
                        }
                    ]
                }
            }
        }
        case ADD_DECK: {
            return {
                ...state,
                [action.deck.id]: {
                    id: action.deck.id,
                    title: action.deck.title,
                }
            }
        }
        default:
            return state
    }
}

export default decks