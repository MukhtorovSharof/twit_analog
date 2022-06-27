import "./PostListItem.css";
import React, { Component } from "react";

class PostListItem extends Component {
  render() {
    const {
      label,
      important,
      like,
      onFilter,
      onImportantLiked,
      onToggleLiked,
    } = this.props;
    let classNames = "app-list-item d-flex justify-content-between";
    if (important) {
      classNames += " important";
    }
    if (like) {
      classNames += " like";
    }
    return (
      <div className={classNames}>
        <span className="app-list-item-label" onClick={onToggleLiked}>
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-star btn-sm"
            onClick={onImportantLiked}
          >
            <i className="fa fa-star"></i>
          </button>
          <button 
            type="button" 
            className="btn-trash btn-sm" 
            onClick={onFilter}
          >
            <i className="fa fa-trash"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </div>
    );
  }
}

export default PostListItem;
