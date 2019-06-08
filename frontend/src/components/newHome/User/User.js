import React, { Component } from "react";
class User extends Component {
  state = { users: [], pledgeInfo: {} };

  async componentDidMount() {
    let pledgeNumber = this.props.pledgeNumber;
    let response = await fetch(`http://localhost:5000/users/${pledgeNumber}`);
    let users = await response.json();
    this.setState({ users });
  }

  render() {
    console.log(this.props.pledgeInfo);
    return <div>SAD</div>;
  }
}

export default User;
