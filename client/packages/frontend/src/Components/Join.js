import React, { Component } from "react";
import { Link } from "react-router-dom";
class Join extends Component {
  state = {
    from: null,
    to: null,
    chatroom: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { from, to } = this.state;
    return (
      <div>
        <input
          type="number"
          placeholder="From"
          name="from"
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="To"
          name="to"
          onChange={this.handleChange}
        />
        <Link to={`/chat?chatroom=${parseInt(from) + parseInt(to)}`}>
          <button type="submit" onClick={this.handleClick}>
            Join
          </button>
        </Link>
      </div>
    );
  }
}
export default Join;
