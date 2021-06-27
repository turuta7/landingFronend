import React from "react";

import AddCategory from "./text/AddCategory";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Posts from "./Posts";
import Post from "./Post";

export default function RoutCart(props) {
  return (
    <Router>
      <Switch>
        <Route path="/post/:id">
          <Post />
        </Route>
        <Route path="/">
          <Posts />
          <AddCategory />
        </Route>
      </Switch>
    </Router>
  );
}
