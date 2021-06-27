import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const URLBackend = process.env.REACT_APP_URL;
const URL = `${URLBackend}/category`;
console.log("URL", URL);

function Posts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const start = async () => {
      try {
        const returnData = await axios.get(URL);
        setData(returnData.data);
      } catch (error) {
        console.error(error);
      }
    };
    start();
  }, []);

  console.log("props", data);
  return (
    <ul>
      {data.map((post) => (
        <li key={post._id}>
          <Link to={`/post/${post._id}`}>{post.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Posts;
