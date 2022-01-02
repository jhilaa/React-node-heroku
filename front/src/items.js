import React from "react";
import ItemRow from "./itemRow";
import "./style/app.css";

class Items extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfItems: [],
    };
  }

  /** boucle infinie
    componentDidUpdate() {
    this.fetchData();
  }
  */

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("http://localhost:7000/api/" + this.props.route, {}).then(
      (response) => {
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
          this.setState({
            listOfItems: newJson,
          });
        });
      }
    ); // fin du fetch
    //let { listOfItems } = this.state;
  }

  //--
  render() {
    // Permet de générer les deux colonnes et de dispatcher pairs/impairs - le 2eme if gère les cas ou nous avons un nombre impair d'items au total
    return (
      <div>
        <div className="container">
          <div className="colItems">
            {this.state.listOfItems.map((item, index) => {
              if (index % 2 === 0) {
                if (index + 1 < this.state.listOfItems.length) {
                  return (
                    <ItemRow
                      array={[item, this.state.listOfItems[index + 1]]}
                    />
                  );
                } else {
                  return <ItemRow array={[item]} />;
                }
              }
            })}
          </div>
        </div>
      </div>
    );
  } // fin du render
} // fin de this.state

export default Items;
