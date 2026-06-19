import Card from "./Card"

function Cards({cards, onCardClick}){
    return(
        <div className="cards-grid">
            {cards.map(card => (
                <Card key = {card.id} card={card} onClick={()=> onCardClick(card.id)} />
            ))}
        </div>
    );
}
export default Cards;