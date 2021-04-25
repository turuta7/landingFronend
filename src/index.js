import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Url from "./Images/Url";
import AddUrl from "./Images/AddUrl";

import dotenv from 'dotenv';

import Section from "./text/Section"
import AddSection from "./text/AddSection"

import Heading from "./text/Heading"
import AddHeading from "./text/AddHeading"
dotenv.config();

ReactDOM.render(
  <React.StrictMode>
    <AddUrl />
    <Url />
    <AddSection />
    <Section />
    <AddHeading />
    <Heading />    
  </React.StrictMode>,
  document.getElementById("root")
);


