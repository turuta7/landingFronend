import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ReactDOM from "react-dom";
import "./index.css";
import Url from "./Images/Url";
import AddUrl from "./Images/AddUrl";

import Section from "./text/Section";
import AddSection from "./text/AddSection";

import Heading from "./text/Heading";
import AddHeading from "./text/AddHeading";

import Rout from "./Rout"

ReactDOM.render(



  
  <React.StrictMode>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
          <AddUrl />
          </Route>
          <Route path="/about">
          <AddSection />
          </Route>
          <Route path="/dashboard">
          <AddHeading />
          </Route>
        </Switch>
      </div>
    </Router>
  );






{/* <Rout /> */}

    {/* <AddUrl />
    <Url />
    <AddSection />
    <Section />
    <AddHeading />
    <Heading /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
