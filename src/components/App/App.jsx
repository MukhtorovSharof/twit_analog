import AppHeader from "../AppHeader/AppHeader";
import PostAddForm from "../PostAddForm/PostAddForm";
import PostList from "../PostList/PostList";
import PostStatusFilter from "../PostStatusFilter/PostStatusFilter";
import SearchPanel from "../SearchPanel/SearchPanel";

import "./App.css";

import React, { Component } from "react";

class App extends Component {
  maxId = 4;
  state = {
    data: [
      {
        id: 1,
        label: "Going to learn ReactJS",
        important: false,
        like: false,
      },
      {
        id: 2,
        label: "That is so good",
        important: false,
        like: false,
      },
      {
        id: 3,
        label: "I need a break...",
        important: false,
        like: false,
      },
    ],
    term: "",
    filter: "all",
  };

  onFilter = (id) => {
    this.setState({ data: this.state.data.filter((post) => post.id !== id) });
  };

  onImportantLiked = (id) => {
    this.setState(({ data }) => {
      let idx = data.findIndex((item) => item.id === id);
      let item = data[idx];
      let newItem = { ...item, important: !item.important };
      return {
        data: [...data.slice(0, idx), newItem, ...data.slice(idx + 1)],
      };
    });
  };

  onToggleLiked = (id) => {
    this.setState(({ data }) => {
      let idx = data.findIndex((item) => item.id === id);
      let item = data[idx];
      let newItem = { ...item, like: !item.like };
      return {
        data: [...data.slice(0, idx), newItem, ...data.slice(idx + 1)],
      };
    });
  };

  addNewItem = (status) => {
    let newItem = {
      label: status,
      important: false,
      like: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  searchPost = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.indexOf(term) > -1;
    });
  };

  filterPost = (items, filter) => {
    if (filter === "like") {
      return items.filter((item) => item.like);
    } else {
      return items;
    }
  };

  unUpdateSearch = (term) => {
    this.setState({ term });
  };

  onFilterSelect = (filter) => {
    this.setState({filter})
  }

  render() {
    const { data, term, filter } = this.state;

    const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

    return (
      <div className="app">
        <AppHeader
          likeLeng={data.filter((item) => item.like === true).length}
          postLeng={data.length}
        />
        <div className="search-panel d-flex">
          <SearchPanel unUpdateSearch={this.unUpdateSearch} />
          <PostStatusFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <PostList
          posts={visiblePosts}
          onFilter={this.onFilter}
          onImportantLiked={this.onImportantLiked}
          onToggleLiked={this.onToggleLiked}
        />
        <PostAddForm addNewItem={this.addNewItem} />
      </div>
    );
  }
}

export default App;
