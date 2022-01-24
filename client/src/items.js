import React from "react";
import ItemRow from "./itemRow";
import { useState, useEffect } from "react";
import "./style/app.css";

function Items(params) {
  const [listOfItems, setListOfItems] = useState([]);

  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    console.log("process.env.NODE_ENV");
    console.log(process.env.NODE_ENV);
    console.log("process.env.REACT_APP_API_URL");
    console.log(process.env.REACT_APP_API_URL);
    console.log("params.route");
    console.log(params.route);
    console.log(process.env.REACT_APP_API_URL);
    console.log(process.env.REACT_APP_API_URL + params.route);
    fetch("http://localhost:7000/apix/" + params.route, {}).then((response) => {
      response.json().then((json) => {
        let newJson = new Array();
        let newJsonKeyword = {};
        let newJsonKeywords = new Array();
        let jsonData = {};
        for (let i = 1; i <= json.length; i++) {
          jsonData.project_id = json[i - 1].project_id;
          jsonData.title = json[i - 1].title;
          jsonData.description = json[i - 1].description;
          jsonData.snapshot = json[i - 1].snapshot;
          // on push le dernier keyword dans le tableau des keywords
          // si on change de projet
          //    - on passe le tableau des keywords dans l'objet jsonData
          //    - on push le jsonData dans le tableau des projets
          //    - on réinitialise tous les objets
          newJsonKeyword = {
            keyword_id: json[i - 1].keyword_id,
            keyword: json[i - 1].keyword,
            color: json[i - 1].color,
          };
          newJsonKeywords.push(newJsonKeyword);
          if (
            i == json.length ||
            json[i - 1].project_id != json[i].project_id
          ) {
            jsonData.keywords = newJsonKeywords.slice();
            newJson.push(jsonData);
            //-- reinit des objets
            jsonData = {};
            newJsonKeyword = {};
            newJsonKeywords = new Array();
          }
        }
        //setListOfItems([1, 2, 3]);
        setListOfItems(newJson);
      });
    });
  }, [params.route]); // pour ajouter une contrainte pourle useeffect sur le changement de la route (pour éviter les boucles infinies)
  // fin du fetch
  //let { listOfItems } = this.state;

  // Permet de générer les deux colonnes et de dispatcher pairs/impairs - le 2eme if gère les cas ou nous avons un nombre impair d'items au total
  //return "fefezf " + listOfItems[0].title
  return (
    <div>
      <div className="container">
        <div className="colItems">
          {listOfItems.map((item, index) => {
            if (index % 2 === 0) {
              if (index + 1 < listOfItems.length) {
                return <ItemRow array={[item, listOfItems[index + 1]]} />;
              } else {
                return <ItemRow array={[item]} />;
              }
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Items;
