import React, { useState } from "react";

import axios from "axios";
const URLBackend =
process.env.REACT_APP_URL || "http://localhost:4000";

const URL = `${URLBackend}/section`;

function AddSection() {
  const [textRu, setTextRu] = useState("");
  const [textEn, setTextEn] = useState("");
  const [textUa, setTextUa] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await axios.post(`${URL}`, {
      textRu,
      textEn,
      textUa,
    });
    window.location.reload();
  };

  return (
    <div className="center section-background">
      <p>
        <b>Add new section</b>
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <span>textRu: </span>
          <textarea
            type="text"
            value={textRu}
            onChange={(e) => setTextRu(e.target.value)}
          />
          <span>textEn: </span>
          <textarea
            type="text"
            value={textEn}
            onChange={(e) => setTextEn(e.target.value)}
          />
          <span>textUa: </span>
          <textarea
            type="text"
            value={textUa}
            onChange={(e) => setTextUa(e.target.value)}
          />
        </div>

        <input type="submit" value="Отправить" />
      </form>
    </div>
  );
}

export default AddSection;
