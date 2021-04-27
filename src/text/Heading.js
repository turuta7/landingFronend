import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Text.css";

function Section() {
  const URLBackend =
  "https://turutalandingbackend.herokuapp.com1" || "http://localhost:4000";

  const URL = `${URLBackend}/heading`;

  const [mydata, setmydata] = useState([]);

  const [textRu, setTextRu] = useState();
  const [textEn, setTextEn] = useState();
  const [textUa, setTextUa] = useState();

  const putData = async (id) => {
    console.log(textRu, textEn, textUa);
    await axios.put(`${URL}/${id}`, {
      textRu,
      textEn,
      textUa,
    });
    window.location.reload();
  };

  const deleteData = async (id) => {
    await axios.delete(`${URL}/${id}`);
    window.location.reload();
  };

  const data = async () => {
    const dataJSON = await axios(URL);
    console.log(dataJSON.data);
    if (dataJSON) {
      setmydata(dataJSON.data);
    }
  };

  useEffect(() => {
    data();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="center heading-background">
      <p>
        <b>Heading data base</b>
      </p>

      <form>
        {mydata.map((data, i) => {
          return (
            <div>
              <span>textRu: </span>
              <textarea
                defaultValue={data.textRu}
                onChange={(e) => setTextRu(e.target.value)}
              />
              <span>textEu: </span>
              <textarea
                type="text"
                defaultValue={data.textEn}
                onChange={(e) => setTextEn(e.target.value)}
              />
              <span>textUa: </span>
              <textarea
                type="text"
                defaultValue={data.textUa}
                onChange={(e) => setTextUa(e.target.value)}
              />
              <input
                type="button"
                value="Изменить"
                onClick={() => putData(data._id)}
              />
              <input
                type="button"
                value="X"
                onClick={() => deleteData(data._id)}
              />
            </div>
          );
        })}
      </form>
      <br />
    </div>
  );
}

export default Section;
