// Import
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  CornerUpLeft,
  Edit,
  Trash,
  Archive,
} from 'react-feather';

// Local Import
import logo from '../../assets/images/PocketLogo.png';
import '../App/style.scss';
import './style.scss';

const SinglePlantUser = ({ plant }) => {
  console.log('MA PLANTE USER');
  console.log(plant);
  return (
    <div className="section-right">
      <div className="plant_garden">
        <div className="plant_garden--single">
          <Link to="/garden">
            <div className="btn-back-to-garden">
              <CornerUpLeft />
            </div>
          </Link>
          <div className="single_plantUser_img">
            <img src={logo} alt="" />
          </div>

          <div className="single_plantUser_content">
            <div className="contentPlantUser_head">
              <h3>{plant.pseudoPlant}</h3>
              <p>Catégorie : <span>{plant.plantmodel.category}</span> </p>
              <p>Famille : <span>{plant.plantmodel.family}</span></p>
              <p>Type : <span>{plant.plantmodel.type}</span></p>
            </div>
            <div className="contentPlantUser_main">
              <div className="contentPlantUser_main--jardinage">
                <h3>Mode de vie</h3>
                <p>Entretien</p>
                <p>Besoin en eau</p>
                <p>Croissance</p>
                <p>Multiplication</p>
                <p>Résistance au froid</p>
                <p>Densité</p>
              </div>
              <div className="contentPlantUser_main--emplacement">
                <h3>Milieu de vie</h3>
                <p>Exposition</p>
                <p>Plantation</p>
                <p>Date de plantation</p>
                <p>Végétation</p>
                <p>Type de sol</p>
                <p>PH du sol</p>
                <p>Taux d'humidité du sol</p>
              </div>
            </div>
            <div className="contentPlantUser_footer">
              <p> Description : <span>{plant.plantmodel.Description}</span> </p>
            </div>
          </div>
        </div>

        <div className="plant_garden_organisation">
          <div className="organisation_title">
            <h3> Organisation </h3>
          </div>
          <div className="organisation_tasks_list">
            <ul className="tasks_list">
              <Tasks />
              <Tasks />
              <Tasks />
              <Tasks />
            </ul>
          </div>
          <div className="add_task">
            <form className="add_task_form">
              <input
                className="task_input"
                type="text"
                value=""
                placeholder="Ajouter une tâche"
              />
              <button
                className="task_button"
                type="submit"
              >
                +
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SinglePlantUser;

const Tasks = () => (
  <li className="task">
    <input
      className="task--check"
      type="checkbox"
      style={{ color: 'red' }}
    />
    <span className="task--text">
      <p> J'arrose mes plantes </p>
    </span>
    <div className="task--buttons">
      <button type="button" className="task_btn edit"> <Edit /> </button>
      <button type="button" className="task_btn remove"> <Trash /> </button>
      <button type="button" className="task_btn archive"> <Archive /> </button>
    </div>
  </li>
);

SinglePlantUser.propTypes = {
  plant: PropTypes.shape().isRequired,
};
