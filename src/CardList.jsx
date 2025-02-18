import React from "react";
import Card from "./Card";
import dataCards from "./cardData";

const CardList = ({direction}) => {
  return (
    <div className={`cardlist marquee--${direction}`}>
      {dataCards.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          comment={card.comment}
          at={card.at}
          imgsrc={card.imgsrc}
        />
      ))}
    </div>
  );
};

export default CardList;
