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
      pledgeText: [
        "Plant-based Meals",
        "Alternative Transportation",
        "Replacing Disposables"
      ],
      pledges: [],
      pledgeNumber: -1
    };
  }

  async componentDidMount() {
    let pledgeNumber = this.props.pledgeNumber;
    pledgeNumber = 0;
    var respPledgeInfo = await fetch(`http://localhost:5000/pledges`);
    var pledgeInfo = await respPledgeInfo.json();
    this.setState({ pledgeNumber: pledgeNumber, pledges: pledgeInfo });
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

  renderGroups = () => {
    const pledgeNumber = this.state.pledgeNumber;
    var coolColor = true;
    return [0, 1, 2].map((group, index) => {
      if (pledgeNumber !== -1 && pledgeNumber !== index) {
        let gradient;
        let text = this.state.pledgeText[index];
        if (coolColor) {
          gradient = "cool-gradient";
          coolColor = !coolColor;
        } else gradient = "warm-gradient";

        return (
          <Group
            gradient={gradient}
            key={index}
            pledgeNumber={index}
            pledgeText={text}
          />
        );
      }
      return null;
    });
  };

  render() {
    return (
      <div className="home">
        <div className="home__background">
          <img src={Beach} alt="Beach" />
        </div>
        <div className="dashboard">
          <div className="user">sad</div>
          <div className="groups">{this.renderGroups()}</div>
          <Checklist
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
