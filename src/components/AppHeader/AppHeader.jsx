import React from "react";
import "./AppHeader.css";

export default function AppHeader({ postLeng, likeLeng }) {
  return (
    <div className="app-header d-flex">
      <h1>Your Statuses</h1>
      <h2>
        {postLeng} posts, {likeLeng} likes <span>(click your post status)</span>
      </h2>
    </div>
  );
}
