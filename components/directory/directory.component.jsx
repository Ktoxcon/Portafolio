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
          imageUrl:
            "https://www.tutofox.com/wp-content/uploads/2019/08/Java-Inesem.jpg",
          percent: "75%",
        },
        {
          id: 2,
          title: "Angular",
          imageUrl:
            "https://i1.wp.com/blog.enriqueoriol.com/wp-content/uploads/2018/01/AngularLogo.jpg?fit=1200%2C675",
          percent: "75%",
        },
        {
          id: 3,
          title: "JavaScript",
          imageUrl:
            "https://miro.medium.com/max/3200/1*dt3SJbXiOILlXnZzIqJZOA.png",
          percent: "70%",
        },
        {
          id: 4,
          title: "React",
          imageUrl:
            "https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png",
          percent: "50%",
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
