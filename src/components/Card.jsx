import "./Card.css";

function Card({ card, onClick }) {
  return (
    <div className={`card ${card.isFlipped ? "flipped" : ""}`} onClick={onClick}>
      <div className="card-inner">
        <div className="card-back">?</div>
        <div className="card-front">{card.value}</div>
      </div>
    </div>
  );
}

export default Card;
