import React from "react";
import Item from "./item";
import "./style/app.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Fonctionnalité servant uniquement à générer l'organisation des Items
const ItemRow = ({ array }) => (
  <div className="row">
    {array.map((item) => {
      return (
        <div className="col">
          <Item info={item} />
        </div>
      );
    })}
  </div>
);

export default ItemRow;
