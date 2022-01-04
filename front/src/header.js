import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, Link } from "react-router-dom";
//--------------

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light px-4 mb-4">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item nav-link">
              <Link to="projets">
                <a class="nav-item nav-link">Projets</a>
              </Link>
            </li>
            <li class="nav-item nav-link">
              <Link to="ressources">
                <a class="nav-item nav-link">Ressources</a>
              </Link>
            </li>
            <li class="nav-item nav-link">
              <Link to="/media">
                <a class="nav-item nav-link">Media</a>
              </Link>
            </li>
            <li class="nav-item nav-link">
              <Link to="experiences">
                <a class="nav-item nav-link">Experiences</a>
              </Link>
            </li>
            <li class="nav-item nav-link">
              <Link to="keywords">
                <a class="nav-item nav-link">Mots-clé</a>
              </Link>
            </li>
            <li class="nav-item nav-link"></li>
            <li class="nav-item nav-link">
              <a class="nav-link disabled" href="#">
                ADA
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Header;
