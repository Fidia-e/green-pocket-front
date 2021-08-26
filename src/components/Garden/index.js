// Imports
import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Search, ChevronRight, ChevronLeft, ChevronsLeft, ChevronsRight,
} from 'react-feather';

// Local Imports
import logo from '../../assets/images/PocketLogo.png';
import './style.scss';

const Garden = ({
  listPlantUser,
  firstPage,
  previousPage,
  nextPage,
  lastPage,
  removePlant,
  nbPlant,
}) => (
  <div className="section-right">
    <div className="garden">
      <div className="garden--header">
        <div className="garden-header--title">
          <h1 className="garden_title"> Mon jardin</h1>
        </div>

        <div className="gardenHeader--searchBar">

          <div className="searchBar--input">
            <input type="text" placeholder="Rechercher..." />
            <button
              type="submit"
            >
              <Search className="searchBar--icon" />
            </button>
          </div>

          <div className="searchBar--pagination">
            <div className="button_paginnation">
              <button
                className="buttonSearch"
                type="button"
                onClick={firstPage}
              >
                <ChevronsLeft />
              </button>
              <button
                className="buttonSearch"
                type="button"
                onClick={previousPage}
              >
                <ChevronLeft />
              </button>
              <button
                className="buttonSearch"
                type="button"
                onClick={nextPage}
              >
                <ChevronRight />
              </button>
              <button
                className="buttonSearch"
                type="button"
                onClick={lastPage}
              >
                <ChevronsRight />
              </button>
            </div>
            <div className="text_resultat">
              <p>{nbPlant} plantes dans ton jardin.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="cardList">
        <div className="cardList--user">
          {
              listPlantUser.map((plantUser) => {
                console.log(plantUser);
                return (
                  <div key={plantUser.id} className="cardGarden">
                    <div className="cardGarden--border">
                      <div className="cardGarden--image">
                        <img className="gardenLogo" src={logo} alt={plantUser.plantmodel.name} />
                      </div>
                      <div className="cardGarden--content">
                        <h3> {plantUser.pseudoPlant} </h3>
                        <p> {plantUser.plantmodel.Description} </p>
                        <Link to={`/garden/${plantUser.slug}`}>
                          <button className="showUserPlant" type="submit">Afficher toute ma plante</button>
                        </Link>
                        <button
                          className="removePlant"
                          type="button"
                          onClick={() => {
                            removePlant(plantUser.id);
                          }}
                        >
                          Supprimer ma plante
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            }
        </div>
      </div>

    </div>
  </div>
);
Garden.propTypes = {
  removePlant: Proptypes.func.isRequired,
  listPlantUser: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.number,
      name: Proptypes.string,
      pseudoPlant: Proptypes.string,
      Description: Proptypes.string,
    }),
  ).isRequired,
  firstPage: Proptypes.func.isRequired,
  previousPage: Proptypes.func.isRequired,
  nextPage: Proptypes.func.isRequired,
  lastPage: Proptypes.func.isRequired,
};

export default Garden;
