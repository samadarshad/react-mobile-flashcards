const decks = {
    0: {
        id: "0",
        title: 'React',
        questions: [
            {
                question: 'React is library for managing user interfaces',
                answer: 'true'
            },
            {
                question: 'Ajax requests in React happen in the componentDidMount lifecycle event',
                answer: 'true'
            }
        ]
    },
    1: {
        id: "1",
        title: 'JavaScript',
        questions: [
            {
                question: 'A closure is the combination of a function and the lexical environment within which that function was declared',
                answer: 'true'
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