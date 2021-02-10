const decks = {
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
        ]
    },
    1: {
        id: 1,
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
}

export function getDecks() {
    return decks
}

export function getDeck(id) {
    return decks[id]
}

export function saveDeckTitle(title) {
    console.log("saving", title)
    return
}

export function addCardToDeck(title, card) {
    console.log("saving", JSON.stringify(card))
    console.log("to", title)
    return
}