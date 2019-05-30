import React, { Component } from "react";
import "./Group.scss";
import { FaLeaf, FaSubway, FaRecycle } from "react-icons/fa";

class Group extends Component {
  state = {
    users: [],
    iconMapping: [<FaLeaf />, <FaSubway />, <FaRecycle />],
    expanded: false
  };

  async componentDidMount() {
    console.log();
    let pledgeNumber = this.props.pledgeNumber;
    let response = await fetch(`http://localhost:5000/users/${pledgeNumber}`);
    let users = await response.json();
    this.setState({ users: users });
  }

  renderUsers = () => {
    return this.state.users.map((item, index) => {
      // console.log(item);
      return (
        <div key={index} className="groups__table-row">
          <div className="groups__table-cell name">
            <span>{item.username}</span>
          </div>
          <div className="groups__table-cell goal">10</div>
          <div className="groups__table-cell pledge">{item.score}</div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="groups__group">
        <div className={`circle ${this.props.gradient}`} />
        <div className="groups__filters">
          <div className="groups__logo">
            <div className="groups__icon">
              {this.state.iconMapping[this.props.pledgeNumber]}
            </div>
          </div>
          <div className="groups__options">
            <div className="quarter bottom-right" />
          </div>
        </div>
        <div className="groups__table">
          <div className="groups__table-header groups__table-row">
            <div className="groups__table-cell name">Username</div>
            <div className="groups__table-cell goal">Goals</div>
            <div className="groups__table-cell pledge">Score</div>
          </div>
          <div className="groups__table-body black">{this.renderUsers()}</div>
        </div>
      </div>
    );
  }
}

export default Group;
