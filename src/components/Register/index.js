/* eslint-disable jsx-a11y/label-has-associated-control */
// Import
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ArrowLeftCircle } from 'react-feather';

// Import Local
import './style.scss';

// Component Register =>
const Register = ({
  formData,
  onInputRegisterChange,
  onFormRegisterSubmit,
  messageLog,
}) => {
  const handleInputChange = (evt) => {
    // Fonction permettant de récupérer toutes les infos saisies dans les input.
    const { name, value } = evt.target;
    onInputRegisterChange({
      [name]: value,
    });
  };

  return (

    <div className="container">
      <div className="container--register">
        <form
          className="formRegister"
          onSubmit={(e) => {
            e.preventDefault();
            onFormRegisterSubmit();
          }}
        >
          <label name="firstName" className="formRegister--label">
            J'entre mon prénom<span>*</span>
          </label>
          <input
            className="formRegister--input"
            type="text"
            id="firstName"
            placeholder="Raoul"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}

          />
          <label name="lasttName" className="formRegister--label">J'entre mon nom<span>*</span></label>
          <input
            className="formRegister--input"
            type="text"
            id="lasttName"
            placeholder="Rateau"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}

          />
          <label name="pseudo" className="formRegister--label">Je choisi mon pseudo<span>*</span></label>
          <input
            className="formRegister--input"
            type="text"
            id="pseudo"
            placeholder="Ton pseudo, nouveau Gardener!!"
            name="pseudo"
            value={formData.pseudo}
            onChange={handleInputChange}

          />
          <label name="email" className="formRegister--label">J'entre mon email<span>*</span></label>
          <input
            className="formRegister--input"
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}

          />
          <label name="password" className="formRegister--label">Je choisis mon mot de passe<span>*</span></label>
          <input
            className="formRegister--input"
            type="password"
            id="password"
            placeholder="Mot de passe"
            name="password"
            value={formData.password}
            onChange={handleInputChange}

          />
          <label name="dateofbirth" className="formRegister--label">Date de naissance<span>*</span></label>
          <input
            className="formRegister--input"
            type="date"
            id="dateofbirth"
            placeholder="Date de naissance"
            name="dateofbirth"
            value={formData.dateofbirth}
            onChange={handleInputChange}

          />
          <label name="country" className="formRegister--label">Ma ville<span>*</span></label>
          <input
            className="formRegister--input"
            type="text"
            id="country"
            placeholder="Ville"
            name="country"
            value={formData.country}
            onChange={handleInputChange}

          />
          <label name="citycode" className="formRegister--label">Son code postal<span>*</span></label>
          <input
            className="formRegister--input"
            type="number"
            id="citycode"
            placeholder="Code postal"
            name="citycode"
            value={formData.citycode}
            onChange={handleInputChange}

          />
          <button
            className="formRegister--button"
            type="submit"
          >
            À vos marques, prêts? Plantez!!!
            <i className="far fa-arrow-alt-circle-right" />
          </button>
        </form>
        <div className="buttonBack">
          <Link
            exact="true"
            to="/login"
          >
            <ArrowLeftCircle className="buttonBack--icon" />
          </Link>
          <p>Cliquer ici pour revenir sur l'espace de login.</p>
        </div>
        <div className="messageLog">
          <p>{messageLog}</p>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  messageLog: PropTypes.string.isRequired,
  formData: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    pseudo: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    altPassword: PropTypes.string.isRequired,
  }).isRequired,
  onInputRegisterChange: PropTypes.func.isRequired,
  onFormRegisterSubmit: PropTypes.func.isRequired,
}.isRequired;

export default Register;
