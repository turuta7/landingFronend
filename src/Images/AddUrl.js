import React, { useState } from "react";

import axios from "axios";
const URLBackend =
"https://turutalandingbackend.herokuapp.com" || "http://localhost:4000";

const URL = `${URLBackend}/slider`;

function AddUrl() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await axios.post(`${URL}`, {
      title: `${title}`,
      url: `${url}`,
    });
    window.location.reload();
  };

  return (
    <div className="center">
      <p>
        <b>Add new url</b>
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <span>title: </span>
          <textarea
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <span>url: </span>
          <textarea
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        <input type="submit" value="Отправить" />
      </form>
    </div>
  );
}

export default AddUrl;