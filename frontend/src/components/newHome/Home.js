import React, { Component } from "react";
import Beach from "../../images/beach.jpg";

import "./Home.scss";
import Checklist from "./Checklist";
import Group from "./Group";

class Home extends Component {
  constructor(props) {
    super(props);
    // this.textInput = React.createRef();

    this.state = {
      items: [
        {
          text: "Todo",
          currentStatus: 1,
          previousStatus: -1
        },
        {
          text: "Completed",
          currentStatus: 2,
          previousStatus: -1
        },
        {
          text: "Deleted",
          currentStatus: 3,
          previousStatus: 1
        }
      ]
    };
  }

  setItems = newItems => {
    this.setState({ items: newItems });
  };

  setItemStatus = (newStatus, index) => {
    let newItems = this.state.items;
    newItems[index].previousStatus = newItems[index].currentStatus;
    newItems[index].currentStatus = newStatus;
    this.setState({ items: newItems });
  };

  setDeleted = index => {
    let newItems = this.state.items;
    if (newItems[index].currentStatus === 3) {
      newItems[index].currentStatus = newItems[index].previousStatus;
    } else {
      newItems[index].previousStatus = newItems[index].currentStatus;
      newItems[index].currentStatus = 3;
    }
    this.setState({ items: newItems });
  };

  setItemText = (e, index) => {
    const newText = e.target.value;
    let newItems = this.state.items;
    newItems[index].text = newText;
    this.setState({ text: newText });
  };

  render() {
    return (
      <div className="home">
        <div className="home__background">
          <img src={Beach} alt="Beach" />
        </div>
        <div className="dashboard">
          <div className="user">sad</div>
          <div className="groups">
            <Group pledge={"very"} />
            <Group pledge={"sad"} />
          </div>
          <Checklist
            items={this.state.items}
            setItemStatus={this.setItemStatus}
            setDeleted={this.setDeleted}
            setItemText={this.setItemText}
            setItems={this.setItems}
          />
        </div>
      </div>
    );
  }
}
export default Home;
