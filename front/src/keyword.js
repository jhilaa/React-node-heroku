import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/app.css";
import { useState } from "react";
//import ModalDescription from "./Modal_description.js";
// A relier à votre API
// Créer le bouton qui relie à Modal_description.js

function toggleFocus() {
  this.setState({ focus: !this.state.focus });
}

function Keyword() {
  const [show, setShow] = useState(false);
  return (
    <div class="d-inline badge badge-primary me-2 bg-warning">laravel</div>
  );
}
export default Keyword;
