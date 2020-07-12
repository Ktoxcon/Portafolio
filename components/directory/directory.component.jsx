import React from "react";
import MenuItem from "../menuitem/menuitem.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          id: 1,
          title: "Java",
          imageUrl: "https://cdn.worldvectorlogo.com/logos/java.svg",
          percent: "75%",
        },
        {
          id: 1,
          title: "Java",
          imageUrl: "https://cdn.worldvectorlogo.com/logos/java.svg",
          percent: "75%",
        },
        {
          id: 1,
          title: "Java",
          imageUrl: "https://cdn.worldvectorlogo.com/logos/java.svg",
          percent: "75%",
        },
        {
          id: 1,
          title: "Java",
          imageUrl: "https://cdn.worldvectorlogo.com/logos/java.svg",
          percent: "75%",
        },

        
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, percent }) => (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            percent={percent}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
