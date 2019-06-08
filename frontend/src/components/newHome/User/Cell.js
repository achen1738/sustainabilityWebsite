import React, { Component } from "react";
import "./Table.scss";
class Cell extends Component {
  state = {};
  render() {
    return (
      <div className="cell">
        <div className="cell-entry">NAME</div>
        <div className="cell-entry">RANKING</div>
        <div className="cell-entry">SCORE</div>
        <div className="cell-entry">GOAL</div>
      </div>
    );
  }
}

export default Cell;
