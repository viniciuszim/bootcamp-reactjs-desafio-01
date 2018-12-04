import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Header from "./Header";
import Post from "./Post";

import "./style.css";

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: "Vinicius Miguel",
        avatar:
          "https://station.rocketseat.com.br/api/users/picture/profile-0a69ae21-fdee-4bf6-a463-212c2a19f8f5.jpg",
        time: "há 3 min",
        body: "Texto body"
      },
      {
        id: 2,
        name: "Vinicius Miguel 2",
        avatar:
          "https://station.rocketseat.com.br/api/users/picture/profile-0a69ae21-fdee-4bf6-a463-212c2a19f8f5.jpg",
        time: "há 5 min",
        body: "Texto 2 body"
      }
    ]
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        {posts && posts.map(post => <Post key={post.id} data={post} />)}
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
