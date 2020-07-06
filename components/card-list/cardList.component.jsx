import React from "react";
import Card from "../card/card.component";
import "./cardList.styles.scss";

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          title: "Biblioteca",
          grade: "4to",
          imageUrl: "https://i.ibb.co/bd37MBV/Captura-de-pantalla-62.png",
          id: 1,
          linkUrl: "shop/hats",
        },{
          title: "Biblioteca",
          grade: "4to",
          imageUrl: "https://i.ibb.co/bd37MBV/Captura-de-pantalla-62.png",
          id: 1,
          linkUrl: "shop/hats",
        },{
          title: "Biblioteca",
          grade: "4to",
          imageUrl: "https://i.ibb.co/bd37MBV/Captura-de-pantalla-62.png",
          id: 1,
          linkUrl: "shop/hats",
        },{
          title: "Biblioteca",
          grade: "4to",
          imageUrl: "https://i.ibb.co/bd37MBV/Captura-de-pantalla-62.png",
          id: 1,
          linkUrl: "shop/hats",
        },
      ],
    };
  }

  render() {
    return (
      <div className="card-list">
        {this.state.sections.map(({ title, grade, imageUrl, id, size }) => (
          <Card
            key={id}
            title={title}
            grade={grade}
            imageUrl={imageUrl}
            size={size}
          />
        ))}
      </div>
    );
  }
}

export default CardList;
