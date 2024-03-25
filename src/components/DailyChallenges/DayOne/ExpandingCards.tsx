import React, { useState } from "react";
import "./styles.css";

const CARD_ITEMS = [
  {
    id: 0,
    backgroundUrl:
      "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    title: "Card 1",
  },
  {
    id: 1,
    backgroundUrl:
      "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    title: "Card 2",
  },
  {
    id: 2,
    backgroundUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
    title: "Card 3",
  },
  {
    id: 3,
    backgroundUrl:
      "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    title: "Card 4",
  },
  {
    id: 4,
    backgroundUrl:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    title: "Card 5",
  },
];

const ExpandingCards = () => {
  const [selectedCardIndex, setCardSelectionIndex] = useState(0);
  return (
    <div className="card-contaner">
      {CARD_ITEMS.map((card) => (
        <div
          key={card.id}
          style={{
            background: `url(${card.backgroundUrl})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
          className={`card-item ${
            card.id === selectedCardIndex ? "active" : ""
          }`}
          onClick={() => setCardSelectionIndex(card.id)}
        >
          <h4 className="card-item-title">{card.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default ExpandingCards;
