import React from "react";

import Rout from "./Rout";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
//   useParams,
//   useRouteMatch
// } from "react-router-dom";

import ReactDOM from "react-dom";
import AddCategory from "./text/AddCategory";
// import "./index.css";

// import AddCategory from "./text/AddCategory"

// import Url from "./Images/Url";
// import AddUrl from "./Images/AddUrl";

// import Section from "./text/Section";
// import AddSection from "./text/AddSection";

// import Heading from "./text/Heading";
// import AddHeading from "./text/AddHeading";

// import Rout from "./Rout";

ReactDOM.render(
  // <Router>
  //   <Switch>
  //     {/* <Route path="/:id">
  //       <Person />
  //     </Route> */}
  //     <Route path="/">
  //       <Redirect to="/news" />
  //     </Route>
  //   </Switch>
  // </Router>,

  <React.StrictMode>
    <Rout />
    <AddCategory />
  </React.StrictMode>,
  document.getElementById("root")
);
