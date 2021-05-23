import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Posts = () => {
  const [img, setImg] = useState("");
  const [name, setName] = useState();
  const { id } = useParams();
  console.log(id);
  const URLBackend = "http://localhost:4000";
  const URL = `${URLBackend}/category/${id}`;
  console.log("URL", URL);

  useEffect(() => {
    (async function () {
      try {
        const returnData = await axios.get(URL);
        const image = await new Buffer(returnData.data.img).toString("base64");
        setName(returnData.data.name);
        setImg(image);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [URL]);

  return (
    <div>
      <h3>{name}</h3>
      <img src={`data:image/png;base64,${img}`} alt='avatar' />
    </div>
  );
};

export default Posts;
