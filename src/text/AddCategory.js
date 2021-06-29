import React, { useState } from "react";

import axios from "axios";
import "../text/Text.css";
const URLBackend = process.env.REACT_APP_URL;
const URL = `${URLBackend}/category`;
console.log(URL);



function AddCategory() {

  const [link, setLink] = useState("");
  const [name, setName] = useState("");
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [avatar, setAvatar] = useState([]);

  const formData = new FormData();
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    formData.append("name", name);
    formData.append("link", link);
    formData.append("description", seoDescription);
    formData.append("title", seoTitle);
    formData.append("avatar", avatar[0]);

    try {
      await axios({
        method: "post",
        url: `${URL}`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      setAvatar([]);
      setName("");
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="center heading-background">
      <p>
        <b>Add new category</b>
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <span>link: </span>
          <textarea
            type="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <span>name: </span>
          <textarea
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <span>SEO.Title: </span>
          <textarea
            type="text"
            value={seoTitle}
            onChange={(e) => setSeoTitle(e.target.value)}
          />
          <span>SEO.description: </span>
          <textarea
            type="text"
            value={seoDescription}
            onChange={(e) => setSeoDescription(e.target.value)}
          />
          <span>file: </span>
          <input type="file" onChange={(e) => setAvatar(e.target.files)} />
        </div>

        <input type="submit" value="Отправить" />
      </form>
    </div>
  );
}

export default AddCategory;
