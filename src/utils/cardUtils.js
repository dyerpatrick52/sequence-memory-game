// export const SEQUENCE = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "P", "F"];
export const SEQUENCE = ["1", "2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"]

export function buildDeck(count) {
  return SEQUENCE.slice(0,count).map((value, i) => ({ id: i, value, isFlipped: false }));
}

export function shuffleDeck(deck){
    const shuffled = [...deck];
    for(let i = shuffled.length -1; i>0; i-- ){
        const j = Math.floor(Math.random()* (i+1));
        [shuffled[i],shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export function flipCard(cards, cardId){
    return cards.map(card => card.id === cardId ? {...card, isFlipped: true} : card);
}

export function resetCards(cards) {
  return cards.map(card => ({ ...card, isFlipped: false }));
}



export function isNextInSequence(cardValue, sequenceIndex){
    return cardValue === SEQUENCE[sequenceIndex]
}