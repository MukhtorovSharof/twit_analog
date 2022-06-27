import React, { Component } from "react";
import "./SearchPanel.css";

class SearchPanel extends Component {
  state = {
    term: "",
  };

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({ term });
    console.log(this.state.term);
    this.props.unUpdateSearch(term)
  };

  render() {
    const { term } = this.state;
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Search by posts"
        value={term}
        onChange={this.onUpdateSearch}
      />
    );
  }
}

export default SearchPanel;
