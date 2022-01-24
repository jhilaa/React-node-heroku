import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/app.css";
import { useState } from "react";

// Fonctionnalité servant uniquement à générer l'organisation des Items
const Keywords = ({ array }) => (
  <div>
    {array.map((keyword) => {
      let styles = {
        backgroundColor: keyword.color,
      };
      return (
        <div style={styles} class={`d-inline badge badge-primary me-2`}>
          {`${keyword.keyword}`}
        </div>
      );
    })}
  </div>
);

export default Keywords;
