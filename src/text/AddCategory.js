import React, { useState, useEffect } from "react";

import axios from "axios";
import fs from "fs";
import { title } from "process";

const URLBackend = "http://localhost:4000";

const URL = `${URLBackend}/category`;
console.log(URL);

function AddCategory() {
  const [imgs, setImg] = useState();

  useEffect(async () => {
    try {
      const data = await axios.get(URL);
      console.log(data.data.img, link);
      const image = data.data.img;
      const aaa = new Buffer(image).toString("base64");

      setImg(aaa);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [link, setTextRu] = useState("");
  const [textEn, setTextEn] = useState("");
  const [avatar, setAvatar] = useState([]);

  // const [picture, setPicture] = useState(null);
  const formData = new FormData();

  // const test = (e) => {
  //   console.log("dd");
  // };
  // const config = { headers: {'Content-Type': 'multipart/form-data' } };
  

  
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    
    console.log("files", avatar);
    console.log('link', link);
    formData.append("link", link);
    formData.append("3333", 4343);
    formData.append("avatar", avatar[0]);
    await axios ({
      method: 'patch',
      url: `${URL}/609aafb4abb5511fb8b04b09`,
      data: formData
      ,
      headers: {'Content-Type': 'multipart/form-data' }
      })

   
    // axios.post(URL, formData);
    setAvatar([]);

    // window.location.reload();
  };

  return (
    <div className="center heading-background">
      <img src={`data:image/png;base64,${imgs}`} />

      <p>
        <b>Add new category</b>
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <span>textRu: </span>
          <textarea
            type="link"
            value={link}
            onChange={(e) => setTextRu(e.target.value)}
          />
          {/* <span>textEn: </span>
          <textarea
            type="text"
            value={textEn}
            onChange={(e) => setTextEn(e.target.value)}
          /> */}
          <span>file: </span>
          <input
            type="file"
            onChange={(e) => setAvatar(e.target.files)}
            // value={avatar1}
            // onChange={test}
            // name="avatar"
          />
        </div>

        <input type="submit" value="Отправить" />
      </form>
    </div>
  );
}

export default AddCategory;
