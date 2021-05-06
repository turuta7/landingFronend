import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Url.css";

function Url() {
  const URLBackend =
  process.env.REACT_APP_URL  || "http://localhost:4000";

  const URL = `${URLBackend}/slider`;

  const [mydata, setmydata] = useState([]);
  const [url, setUrl] = useState();
  const [title, setTitle] = useState();

  const putData = async (id) => {
    console.log(url, title);
    await axios.put(`${URL}/${id}`, {
      url: url,
      title: title,
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
    <div className="center">
      <p>
        <b>url data base</b>
      </p>

      <form>
        {mydata.map((data, i) => {
          return (
            <div>
              <span>title: </span>
              <textarea
                defaultValue={data.title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <span>url: </span>
              <textarea
                type="text"
                defaultValue={data.url}
                onChange={(e) => setUrl(e.target.value)}
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
    </div>
  );
}

export default Url;
