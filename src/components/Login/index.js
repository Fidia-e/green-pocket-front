/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */

// Import
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { ArrowRightCircle } from 'react-feather';

// Import Local
import './style.scss';

// Component Login =>
const Login = ({
  formDataLog,
  changeInput,
  onLoginSubmit,
  isLogged,
  messageLog,
}) => {
  const history = useHistory();
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    changeInput({
      [name]: value,
    });
  };

  useEffect(() => {
    // other code
    if (isLogged === true) {
      history.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged]);

  return (

    <div className="login">
      <div className="welcome">
        <p>
          Bienvenue à toi ami des plantes!
        </p>
      </div>
      <div className="login--content">
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            onLoginSubmit();
          }}
        >
          <div>
            <label name="email">
              <i className="fas fa-seedling logoPseudo" />
            </label>
            <input
              className="form--pseudo"
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              value={formDataLog.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label name="pwd">
              <i className="fas fa-unlock-alt logoPwd" />
            </label>
            <input
              className="form--pwd"
              type="password"
              id="pwd"
              placeholder="Mot de passe"
              name="password"
              value={formDataLog.password}
              onChange={handleInputChange}
            />
          </div>
          <button
            className="form--buttonSubmit"
            type="submit"
          >
            Login
          </button>
          <div>
            <span className="txtLog"> {messageLog} </span>
          </div>
        </form>
      </div>
      <div className="linkRegister">
        <p>
          Si tu n'es pas encore membre de Green Pocket nous t'invitons à nous rejoindre :
        </p>
      </div>
      <Link
        to="/register"
      >
        <ArrowRightCircle className="logoRegister" />
      </Link>
    </div>
  );
};

Login.propTypes = {
  formDataLog: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  changeInput: PropTypes.func.isRequired,
  onLoginSubmit: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

Login.defaultProps = {
  formDataLog: {
    email: '',
    password: '',
  },
};

export default Login;
