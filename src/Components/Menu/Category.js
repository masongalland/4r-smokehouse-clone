import React, { Component } from "react";
import MdClose from "react-icons/lib/md/close";

export default class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }
  handleClick = () => this.setState({active: !this.state.active})



  render() {
    const { title, description, items, image } = this.props;
    const styles = {
      backgroundImage: `url(${image})`
    };
    const menItems = items.map((e,i) => {
      return (
        <li key={i} className="men-item">
          <h3>{e.title}</h3>
          <p>{e.description}</p>
        </li>
      )
    })
    return (
      <div>
        <section onClick={this.handleClick} className="category-hero">
          <aside className={this.state.active ? "modal": ""}>
            <h2>{title}</h2>
            <MdClose className={this.state.active ? "close-icon active-icon" : "close-icon"} />
          </aside>
          <div className={this.state.active ? "bg bg-active" : "bg"} style={styles} />
        </section>
        <aside className={this.state.active ? "menu-items menu-items-active": "menu-items"}>
          <header>
            <h2>{title === "DESSERTS" ? "WHOLE CAKES & WEDGE O’ CAKE" : title}</h2>
            <p>{description}</p>
          </header>
          <ul>
            {menItems}
          </ul>
        </aside>
      </div>
    );
  }
}
