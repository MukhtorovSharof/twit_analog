import PostListItem from "../PostListItem/PostListItem";
import "./PostList.css";

import React, { Component } from "react";

export default class PostList extends Component {
  render() {
    const { posts, onFilter, onImportantLiked, onToggleLiked } = this.props;
    return (
      <ul className="app-list list-group">
        {posts.map((post) => {
          const { id, ...postProp } = post;
          return (
            <li key={id} className="list-group-item">
              <PostListItem
                {...postProp}
                onFilter={() => onFilter(id)}
                onImportantLiked={() => onImportantLiked(id)}
                onToggleLiked={() => onToggleLiked(id)}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
