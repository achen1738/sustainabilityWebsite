import React, { Component } from "react";
import "./Group.scss";
import { FaLeaf, FaSubway, FaRecycle } from "react-icons/fa";
import { FiUsers, FiList, FiAward } from "react-icons/fi";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import Users from "../../../server/dev";

class Group extends Component {
  state = {
    users: [],
    iconMapping: [<FaLeaf />, <FaSubway />, <FaRecycle />],
    expanded: false
  };

  async componentDidMount() {
    let users;
    let pledgeNumber = this.props.pledgeNumber;
    console.log(this.props.local);
    if (this.props.local) {
      users = Users[this.props.pledgeNumber];
    } else {
      let response = await fetch(`http://localhost:5000/users/${pledgeNumber}`);
      users = await response.json();
    }
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

  renderInformation = () => {
    // let { users, score, goals } = this.state.pledgeInfo;
    let users = 5;
    let score = 5;
    let goals = 5;

    return (
      <div className="groups__information">
        {/* <div className="groups__information-icons"> */}
        <div key="goals" className="groups__option">
          <FiList />
          <span>{`${goals} goals completed`}</span>
        </div>
        <div key="score" className="groups__option">
          <FiAward />
          <span>{`${score} pledge score`}</span>
        </div>
        <div key="users" className="groups__option">
          <FiUsers />
          <span>{`${users} members`}</span>
        </div>
        {/* </div> */}
        {/* <div className="groups__information-desc">
        </div> */}
      </div>
    );
  };

  render() {
    let expanded = this.state.expanded;
    let circleStyle = `circle`;
    let hidden = "hide";
    if (expanded) {
      circleStyle += " circle_expanded";
      hidden = "";
    }
    return (
      <div className="groups__group">
        <div className={`${circleStyle} ${this.props.gradient}`} />
        <div className={`groups__filters ${hidden}`}>
          <div className="groups__logo">
            <div
              className={`groups__icon ${this.props.hoverColor}`}
              onClick={() => this.setState({ expanded: !this.state.expanded })}
            >
              {this.state.iconMapping[this.props.pledgeNumber]}
              <CSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
              >
                {this.state.expanded ? (
                  <span>{this.props.pledgeText}</span>
                ) : null}
              </CSSTransitionGroup>
            </div>
          </div>
          <div className="groups__options">
            <div className="quarter bottom-right" />
            <CSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
            >
              {this.state.expanded ? this.renderInformation() : null}
            </CSSTransitionGroup>
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
