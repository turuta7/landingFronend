import React from "react";
import { Link } from "react-router-dom";

function Posts(props) {
  console.log("props", props);
  return (
    <ul>
      {props.post.map((post) => (
        <li key={post._id}>
          <Link to={`/post/${post._id}`}>{post.name}</Link>          
        </li>
      ))}
    </ul>
  );
}

export default Posts;
