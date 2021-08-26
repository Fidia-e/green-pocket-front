// Import
import React from 'react';
import { NavLink } from 'react-router-dom';

// Local Import
import logo from '../../assets/images/GreenPocketLogo.png';
import './style.scss';

const NavBar = () => (
  <div className="header">
    <nav className="nav">
      <div className="nav--logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav--links">
        <NavLink exact className="nav--link link-accueil" to="/">
          Accueil
        </NavLink>
        <NavLink
          exact
          className="nav--link link-catalog"
          to="/catalog"
        >
          Catalogue
        </NavLink>
        <NavLink exact className="nav--link link-garden" to="/garden">
          Mon jardin
        </NavLink>
        <NavLink exact className="nav--link link-calendar" to="/calendar">
          Calendrier
        </NavLink>
        <NavLink exact className="nav--link link-profil" to="/profil">
          Mon profil
        </NavLink>
        <a className="nav--link link-profil" href="http://54.87.69.37/Projet-green-pocket-back/public/login" target="_blank" rel="backoffice">
          BackOffice
        </a>
      </div>
    </nav>
  </div>
);

export default NavBar;
