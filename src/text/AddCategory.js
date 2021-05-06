import React, { useState } from "react";

import axios from "axios";
import fs from "fs";

const URLBackend = "http://localhost:4000";

const URL = `${URLBackend}/category`;
console.log(URL);

function AddCategory() {
  const [text, setTextRu] = useState("");
  const [textEn, setTextEn] = useState("");
  const [avatar, setTextUa] = useState([]);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const formData = new FormData(); 
    console.log("avatar",avatar);

    formData.append('avatar', avatar)
    await axios(
      {
        method: "post",
        url: `${URL}`,
        headers: { "Content-Type": "multipart/form-data" },

        data:formData,
      },

      {
        text,
        avatar,
      }
    );
    window.location.reload();
  };

  return (
    <div className="center heading-background">
      <p>
        <b>Add new category</b>
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <span>textRu: </span>
          <textarea
            type="text"
            value={text}
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
            value={avatar}
            name="avatar"
            onChange={(e) => setTextUa(e.target.value)}
          />
        </div>

        <input type="submit" value="Отправить" />
      </form>
    </div>
  );
}

export default AddCategory;
