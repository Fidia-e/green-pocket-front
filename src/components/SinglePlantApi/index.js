// Import
import React from 'react';
import PropTypes from 'prop-types';
import {
  ChevronRight, CornerUpLeft,
} from 'react-feather';
import { Link } from 'react-router-dom';

// Local Import
import pocketLogo from '../../assets/images/PocketLogo.png';
import '../App/style.scss';
import './style.scss';

const SinglePlantApi = ({ plant }) => {
  return (
    <div className="section-right">
      <div className="plant_catalog">
        <div className="plant_catalog--single">
          <Link to="/catalog">
            <div className="btn-back-to-catalog">
              <CornerUpLeft />
            </div>
          </Link>
          <div className="single_plant_img">
            <img src={plant.picture} alt={plant.name} />
          </div>

          <div className="single_plant_content">
            <div className="content_head">
              <h3>Nom       : <span>{plant.name}</span> </h3>
              <p>Catégorie  : <span>{plant.category}</span> </p>
              <p>Famille    : <span>{plant.family}</span> </p>
              <p>Type       : <span>{plant.type}</span> </p>
            </div>
            <div className="content_main">
              <div className="content_main--jardinage">
                <h3>MODE DE VIE</h3><br />
                <p>Entretien : <span>{plant.upKeep}</span> </p>
                <p>Besoin en eau : <span>{plant.needWater}</span> </p>
                <p>Croissance : <span>{plant.growth}</span> </p>
                <p>Multiplication : <span>{plant.multiplication}</span> </p>
                <p>Résistance au froid : <span>{plant.frostResistance}</span> </p>
                <p>Densité : <span>{plant.density}</span> </p>
              </div>
              <div className="content_main--emplacement">
                <h3>MILIEU DE VIE</h3><br />
                <p>Exposition : <span>{plant.exposure}</span> </p>
                <p>Plantation : <span>{plant.plantationType}</span> </p>
                <p>Date de plantation : <span>Avril, Mai,Juin</span></p>
                <p>Végétation : <span>{plant.foliage}</span> </p>
                <p>Type du sol : <span>{plant.groundType}</span> </p>
                <p>PH du sol : <span>{plant.groundPh}</span> </p>
                <p>Humidité du sol : <span>{plant.groundHumidity}</span> </p>
              </div>
            </div>
            <div className="content_footer">
              <p>Description : <span>{plant.Description}</span> </p>
            </div>
          </div>
        </div>
        <div className="plant_catalog--user">
          <h3>Plantes des amis jardiniers</h3>

          {
          plant.plantUsers.map((plantUObj) => (
            <div key={plantUObj.id} className="plant-user-list">
              <div className="plant-user">
                <div className="plant-user-img">
                  <img src={pocketLogo} alt={plant.name} />
                </div>
                <div className="plant-user-content">
                  <p>Nom: <span>{plantUObj.pseudoPlant}</span></p>
                  <p>Plante de <span>{plantUObj.user.pseudoUser}</span></p>
                </div>
                <Link to={`/plant/${plantUObj.slug}`} className="plant-user-link">
                  <ChevronRight />
                </Link>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  );
};

export default SinglePlantApi;

SinglePlantApi.propTypes = {
  plant: PropTypes.shape().isRequired,
};
