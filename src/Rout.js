import React, { useEffect, useState } from "react";

import axios from "axios";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import Posts from "./Posts";
import Post from "./Post";

export default function BasicExample() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async function () {
      const returnData = await axios.get("http://localhost:4000/category");
      console.log(returnData.data);
      setData(returnData.data);
    })();
  }, []);

  return (
    // data.map(d => <h1>{d}</h1>)

    <Router>
      <Switch>
        <Route path="/post/:id">
          <Post post={data[0]} />
        </Route>
        <Route path="/">
          <Posts post={data} />
        </Route>
        {/* {data.map(d => <h1>{d._id}</h1>)} */}
      </Switch>
      {/* <Redirect from="/aaa" to="/dd" /> */}
    </Router>
  );
}
