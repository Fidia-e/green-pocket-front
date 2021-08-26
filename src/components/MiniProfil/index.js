// Import
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'react-feather';
import Proptypes from 'prop-types';

// Local Import
import './style.scss';

const MiniProfil = ({ onLogout, firstName, lastName }) => (
  <div className="profil">
    <div className="profil--header">
      <User className="profil--icon" />
      <div className="profil--user">
        <div className="profil--name">
          <p>
            {firstName} {lastName}
          </p>
        </div>
        <div className="profil--title">
          <p>Gardener</p>
        </div>
      </div>
    </div>
    <div className="profil--content">
      <p>Ma localisation</p>
      <p>Amis jardiniers : 123</p>
      <p>Plantes : 52</p>
      <p>Tâches en cours : 3</p>
    </div>
    <div className="profil--button">
      <button
        type="button"
        className="deconnexion--button"
        onClick={onLogout}
      >
        Déconnexion
      </button>
      <Link to="/profil" className="link--button">
        <button
          type="button"
          className="myProfil--button"
        >
          Mon profil
        </button>
      </Link>
    </div>
  </div>
);

MiniProfil.propTypes = {
  onLogout: Proptypes.func.isRequired,
  firstName: Proptypes.string.isRequired,
  lastName: Proptypes.string.isRequired,
};

export default MiniProfil;
