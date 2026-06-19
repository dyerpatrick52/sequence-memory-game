import { useState, useEffect } from "react";
import { buildDeck, shuffleDeck, flipCard, resetCards, isNextInSequence, SEQUENCE } from "../utils/cardUtils";

export function useGameState(cardCount, previewEnabled){
    const [cards, setCards] = useState(() => shuffleDeck(buildDeck(cardCount)));
    const [sequenceIndex, setSequenceIndex] = useState(0);
    const [isLocked, setIsLocked] = useState(false);
    const isComplete = sequenceIndex === SEQUENCE.length;
    const [isPreviewing, setIsPreviewing] = useState(previewEnabled);

    useEffect(() =>{
        if(!previewEnabled) return;
        setCards(prev => prev.map(card => ({ ...card, isFlipped: true})));
        const timer = setTimeout(() => {
            setCards(prev => resetCards(prev));
            setIsPreviewing(false);
        }, 5000)
        return () => clearTimeout(timer);
    }, []);

    function handleCardClick(cardId) {
        const card = cards.find(c => c.id === cardId);
        if (isLocked || isPreviewing ||card.isFlipped) return;
        setCards(flipCard(cards, cardId));
        if (isNextInSequence(card.value, sequenceIndex)) {
            setSequenceIndex(sequenceIndex + 1);
        } else {
            setIsLocked(true);
            setTimeout(() => {
            setCards(prev => resetCards(prev));
            setSequenceIndex(0);
            setIsLocked(false);
            }, 500);
        }
    }

    function resetGame(){
        setCards(shuffleDeck(buildDeck()));
        setIsLocked(false);
        setSequenceIndex(0);
    }
    return {cards, sequenceIndex, isLocked, isPreviewing, handleCardClick, isComplete, resetGame};
}

