import React, { Component } from "react";
import "./PostAddForm.css";

class PostAddForm extends Component {
  state = {
    inpValue: "",
  };

  onChangeInp = (e) => {
    this.setState({ inpValue: e.target.value.trim() });
  };

  render() {
    const { inpValue } = this.state;
    const { addNewItem } = this.props;
    return (
      <div className="bottom-panel d-flex">
        <input
          type="text"
          placeholder="What are you thinking about?"
          className="form-control new-post-label"
          onChange={this.onChangeInp}
          value={inpValue}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              inpValue ? addNewItem(inpValue) : alert("Your post is empty!");
              this.setState({ inpValue: "" });
            }
          }}
        />
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => {
            inpValue ? addNewItem(inpValue) : alert("Your post is empty!");
            this.setState({ inpValue: "" });
          }}
        >
          Add Post
        </button>
      </div>
    );
  }
}

export default PostAddForm;
