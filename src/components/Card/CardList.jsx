import React from "react";
import CardData from "./CardData";
import Card from "./Card";

const CardList = () => {
  return (
    <div className="wrapper">
      <main className="cardLayout">
        <ul>
          {CardData.map((CardData) => {
            return (
              <Card
                CardData={CardData}
                key={CardData.id}
                imageUrl={CardData.imageUrl}
                title={CardData.title}
                info={CardData.info}
                visitLink={CardData.visitLink}
                sourceLink={CardData.sourceLink}
              />
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default CardList;
