import React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header";
import Items from "./items";
import "./projectKeywords";
import "./projectKeywordsAdmin";
import "./style/app.css";
import "./style/index.css";
//import Ressources from "../routes/Ressources";

const rootElement = document.getElementById("app");
ReactDOM.render(
  <BrowserRouter forceRefresh={true}>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Items route="projects" />} />
        <Route path="projets" element={<Items route="projects" />} />
        <Route path="ressources" element={<Items route="ressources" />}></Route>
        <Route path="media" element={<Items route="media" />}></Route>
        <Route path="experience" element={<Items route="experience" />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
