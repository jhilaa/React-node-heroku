import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/app.css";
import { useState } from "react";

// Fonctionnalité servant uniquement à générer l'organisation des Items
const ProjectKeywordsAdmin = ({ array }) => <div>test</div>;
let data = {};
const [listOfItems, setListOfItems] = useState([]);

useEffect(() => {
  // Met à jour le titre du document via l’API du navigateur
  fetch(
    process.env.REACT_APP_API_URL +
      "project/1" +
      //props.match.project_id +
      "/keywords",
    {}
  ).then((response) => {
    response.json().then((json) => (data = json));
  });
});

// Permet de générer les deux colonnes et de dispatcher pairs/impairs - le 2eme if gère les cas ou nous avons un nombre impair d'items au total
//return "fefezf " + listOfItems[0].title
return (
  <div>
    <div className="container">
      <div className="colItems">
        {data.map((item, index) => {
          return <div>item.title</div>;
          return <div>item.keyword</div>;
          return <div>item.loinked</div>;
        })}
      </div>
    </div>
  </div>
);

export default ProjectKeywordsAdmin;
