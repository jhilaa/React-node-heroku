import React from "react";
import Keywords from "./keywords";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/app.css";
import { useState } from "react";
//import ModalDescription from "./Modal_description.js";
// A relier à votre API
// Créer le bouton qui relie à Modal_description.js

function toggleFocus() {
  this.setState({ focus: !this.state.focus });
}

function Item({ info }) {
  const [show, setShow] = useState(false);
  return (
    <div class="card text-dark flex-row">
      <img
        class="img-thumbnail"
        src={`${info.snapshot}`}
        style={{
          width: "250px",
          height: "250px",
        }}
      />
      <div class="card-body">
        <h4 class="card-title"> {`${info.title}`}</h4>
        <h5 class="card-subtitle mb-2 text-muted"> {`${info.description}`}</h5>
        <div id="keyword">
          <h6 class="mt-4">
            <Keywords array={info.keywords} />
          </h6>
        </div>
      </div>
    </div>
  );
}
export default Item;
