/* eslint-disable max-len */
// Import
import React from 'react';

// Import Local
import './style.scss';
import pocketLogo from '../../assets/images/GreenPocketLogo.png';

// Component LandingPage =>
const LandingPage = () => (
  <div className="landingPage">
    <div className="landingPage--description">
      <img src={pocketLogo} alt="pocketLogo" className="landingPage-logo" />
      <h2>Bienvenue sur Green-Pocket</h2>
      <p>Veuillez vous connecter pour avoir accès au site.</p>
      <p>Ici, vous pourrez faire vivre votre passion des plantes et du jardinage, organiser vos plantes préférées, et les partager à votre communauté.</p>
      <p>Amusez vous bien !</p>
    </div>
  </div>
);
export default LandingPage;
