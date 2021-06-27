import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const Posts = () => {
  const history = useHistory();

  const redirect = (path) => {
    history.push(path);
  };

  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [avatar, setAvatar] = useState([]);

  const { id } = useParams();
  const URLBackend = process.env.REACT_APP_URL;
  const URL = `${URLBackend}/category/${id}`;
  console.log("URL", URL);

  useEffect(() => {
    async function run() {
      try {
        const returnData = await axios.get(URL);
        const image = await new Buffer(returnData.data.img).toString("base64");
        console.log(returnData.data);
        setName(returnData.data.name);
        setImg(image);
        setLink(returnData.data.link);
        setSeoTitle(returnData.data.SEO.title);
        setSeoDescription(returnData.data.SEO.description);
      } catch (error) {
        console.log(error);
      }
    }
    run();
  }, [URL]);

  const deleteData = async (id) => {
    try {
      await axios.delete(URL);
      redirect("/");
    } catch (error) {
      console.error(error);
    }
  };

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
        method: "put",
        url: `${URL}`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.error(error);
    }
    redirect("/");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="button" value="DELETE" onClick={() => deleteData()} />
        <input defaultValue={link} onChange={(e) => setLink(e.target.value)} />
        <input defaultValue={name} onChange={(e) => setName(e.target.value)} />
        <input
          defaultValue={seoTitle}
          onChange={(e) => setSeoTitle(e.target.value)}
        />
        <input
          defaultValue={seoDescription}
          onChange={(e) => setSeoDescription(e.target.value)}
        />
        <input type="file" onChange={(e) => setAvatar(e.target.files)} />
        <input type="submit" value="Обновить" />
        <img src={`data:image/png;base64,${img}`} alt="avatar" />
      </form>
    </div>
  );
};

export default Posts;
