import React from 'react';

// Import Local
import pocketLogo from '../../assets/images/PocketLogo.png';
import '../App/style.scss';
import './style.scss';

// Component LandingPage =>
const Home = () => (
  <div className="section-right">
    <div className="home">
      <div className="home--content">

        <div className="home--logo">
          <img src={pocketLogo} alt="pocketLogo" />
        </div>

        <div className="home--text">
          <h2 className="home--title">Bienvenue sur ton nouvel espace de jardin privé et en ligne!</h2>
          <p className="title_list">Ici, tu peux jardiner tranquillement depuis ton ordinateur et faire toutes ces choses : </p>
          <ul>
            <li>- Consulter un catalogue de plantes fournis qui parmis elles, beaucoup de plantes connues!</li>
            <li>- Accéder à ton espace personnel de gestion de tes plantes.</li>
            <li>- Créer tes propres fiches plante et gérer une organisation</li>
            <li>- Partager vos plantes a votre communautée et accès aux leurs!</li>
          </ul>
          <h3>Amuse toi bien!  À vos marques! Prêts? Plantez!!</h3>
        </div>
      </div>
    </div>
  </div>
);
export default Home;
