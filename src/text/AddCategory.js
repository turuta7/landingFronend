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
          <p>link: </p>
          <textarea
            type="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <p>name: </p>
          <textarea
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <p>SEO.Title: </p>
          <textarea
            type="text"
            value={seoTitle}
            onChange={(e) => setSeoTitle(e.target.value)}
          />
          <p>SEO.description: </p>
          <textarea
            type="text"
            value={seoDescription}
            onChange={(e) => setSeoDescription(e.target.value)}
          />
          <p>file: </p>
          <input type="file" onChange={(e) => setAvatar(e.target.files)} />
        </div>

        <input type="submit" value="Отправить" />
      </form>
    </div>
  );
}

export default AddCategory;
