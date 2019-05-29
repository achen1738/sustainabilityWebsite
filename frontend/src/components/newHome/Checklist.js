import React, { Component } from "react";
import { createStore } from "react-redux";
import "./Home.scss";
import {
  FiPlusCircle,
  FiCircle,
  FiCheckCircle,
  FiX,
  FiXCircle
} from "react-icons/fi";

class Checklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: ["All", "Todo", "Completed", "Deleted"],
      activeTab: 1
    };

    this.textInput = React.createRef();
  }

  submitGoal = e => {
    e.preventDefault();
    const newItem = {
      text: this.textInput.current.value,
      currentStatus: 1,
      previousStatus: 1
    };
    this.textInput.current.value = "";
    const newItems = this.props.items.concat(newItem);
    this.props.setItems(newItems);
  };

  renderTabs = () => {
    return (
      <div className="checklist__tabs">
        {this.state.tabs.map((tab, index) => {
          let tabStyle = "checklist__tab";
          if (index === this.state.activeTab)
            tabStyle += " checklist__tab-active";
          return (
            <div
              key={index}
              onClick={() => this.setState({ activeTab: index })}
              className={tabStyle}
            >
              {tab}
            </div>
          );
        })}
      </div>
    );
  };

  renderItems = () => {
    return (
      <div className="checklist__items">
        {this.props.items.map((item, index) => {
          const status = item.currentStatus;
          const filter = this.state.activeTab;
          if (status === filter || filter === 0) {
            // Initialize all the standard styling/icons
            let itemStyle = "checklist__item";
            let inputStyle = "checklist__item-input";
            let checkIcon = (
              <FiCircle
                className="checklist__item-icon_right"
                onClick={() => {
                  this.props.setItemStatus(2, index);
                }}
              />
            );
            let deleteIcon = (
              <FiX
                className="checklist__item-icon_left"
                onClick={() => this.props.setDeleted(index)}
              />
            );

            // Modify styling or icons based on status.
            if (status === 1) itemStyle += " checklist__item_todo";
            else if (status === 2) {
              itemStyle += " checklist__item_completed";
              checkIcon = (
                <FiCheckCircle
                  className="checklist__item-icon_right"
                  onClick={() => {
                    this.props.setItemStatus(1, index);
                  }}
                />
              );
            } else if (status === 3) {
              itemStyle += " checklist__item_deleted";
              inputStyle += " checklist__item-input_deleted";
              deleteIcon = (
                <FiXCircle
                  className="checklist__item-icon_left"
                  onClick={() => this.props.setDeleted(index)}
                />
              );
            }

            return (
              <div key={index} className={itemStyle}>
                {checkIcon}
                <div className="checklist__item-input">
                  <input
                    type="text"
                    onChange={e => this.props.setItemText(e, index)}
                    className={inputStyle}
                    value={item.text}
                  />
                </div>
                {deleteIcon}
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  };

  render() {
    return (
      <div className="checklist">
        <div className="checklist__content">
          {this.renderTabs()}
          {this.renderItems()}
        </div>
        <div className="checklist__input">
          <form onSubmit={e => this.submitGoal(e)}>
            <input
              type="text"
              ref={this.textInput}
              placeholder="Add your own goal!"
            />
          </form>
          <FiPlusCircle
            style={{ strokeWidth: 1 }}
            className="checklist__input-icon"
          />
        </div>
      </div>
    );
  }
}

export default Checklist;
