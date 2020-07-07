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
          id: 1,
          link: "/projects/4/biblioteca",
        },
        {
          title: "Hospital de Inf.",
          grade: "5to",
          id: 2,
          link: "/projects/5/hospital",
        },
        {
          title: "Twitter Clone",
          grade: "6to",
          id: 3,
          link: "/projects/6/twitter",
        },
        {
          title: "KToxcon",
          grade: "6to",
          id: 4,
          link: "/projects/6/portfolio",
        }
      ]
    };
  }

  render() {
    return (
      <div className="card-list">
        {this.state.sections.map(
          ({ title, grade, bgColor, id, size, link }) => (
            <Card
              key={id}
              link={link}
              title={title}
              grade={grade}
              bgColor={bgColor}
              size={size}
            />
          )
        )}
      </div>
    );
  }
}

export default CardList;
