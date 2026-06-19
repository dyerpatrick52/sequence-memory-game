# Planned Changes

## In Progress
- [ ] `StartPage.jsx` — UI for picking card count (5–20) and enabling card preview
- [ ] `App.jsx` — conditionally render StartPage or the game based on whether settings have been chosen

## Pending
- [ ] `cardUtils.js` — `buildDeck(cardCount)` needs count param so deck size matches selection
- [ ] `useGameState.js` — `resetGame` needs to pass `cardCount` into `buildDeck` so replaying keeps the same count
- [ ] `GameStatus.jsx` — optionally show "Memorise the cards!" text while `isPreviewing` is true

## Done
- [x] `cardUtils.js` — `buildDeck`, `shuffleDeck`, `flipCard`, `resetCards`, `isNextInSequence`, `SEQUENCE`
- [x] `useGameState.js` — game state, flip logic, sequence reset, preview phase (`isPreviewing`)
- [x] `Card.jsx` / `Card.css` — card component with 3D flip animation
- [x] `Cards.jsx` — card grid
- [x] `GameStatus.jsx` — shows current target card and win screen
- [x] `App.jsx` — wires components together
