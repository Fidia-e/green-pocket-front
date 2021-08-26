// Import
import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Plus, Search, ChevronRight, ChevronLeft, ChevronsLeft, ChevronsRight,
} from 'react-feather';
// Local Imports,
import '../App/style.scss';
import './style.scss';

const Catalog = ({
  plantListApi,
  previousPage,
  nextPage,
  firstPage,
  lastPage,
  nbPlant,
  currentPage,
  onButtonSubmit,
  addPlantInputChange,
  pseudoPlant,
  addIdPlant,
  messageAddPlant,
}) => {
  const { list } = plantListApi;
  return (
    <div className="section-right">
      <div className="catalog">

        <div className="catalogHeader">
          <div className="catalogHeader--title">
            <h1> Mon Catalogue</h1>
          </div>

          <div className="catalogHeader--searchBar">

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
                <p>{nbPlant} résultats trouvés, page : {currentPage}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="cardList">
          <div className="cardList--api">
            <div className="palntApiList">
              {
                list.map((plantObj) => (
                  <div key={plantObj.id} className="cardApi">
                    <div className="cardApi--plant">
                      <div className="image">
                        <img src={plantObj.picture} alt={plantObj.name} />
                      </div>
                      <div className="contentCard">
                        <h3> {plantObj.name} </h3>
                        <h4> {plantObj.family} </h4>
                        <p> {plantObj.Description} </p>
                        <div className="contentCard--hover">
                          <div className="hover--icon">
                            <Plus className="contentCard--icon" />
                          </div>
                          <div className="hover--content">
                            <div className="hover--add">
                              <p>Ajouter cette plante à mon jardin</p>
                              <div className="addPlant">
                                <form
                                  onSubmit={(e) => {
                                    e.preventDefault();
                                    onButtonSubmit();
                                  }}
                                >
                                  <input
                                    className="addPlant--input"
                                    type="text"
                                    placeholder="Personnalise son nom"
                                    value={pseudoPlant}
                                    onChange={(e) => {
                                      const newPseudoPlant = e.target.value;
                                      addPlantInputChange(newPseudoPlant);
                                    }}
                                  />
                                  <button
                                    className="addPlant--button"
                                    type="submit"
                                    onClick={() => addIdPlant(plantObj.id)}
                                    onSubmit={(event) => {
                                      event.preventDefault();
                                      onButtonSubmit();
                                    }}
                                  >
                                    +
                                  </button>
                                  <p id="txt-add-plant" className="txt-add-plant"> {messageAddPlant} </p>
                                </form>
                              </div>
                            </div>
                            <div className="hover--show">
                              <Link to={`/catalog/${plantObj.slug}`}>
                                <button className="showPlant" type="submit">Afficher la plante</button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

Catalog.propTypes = {
  messageAddPlant: Proptypes.string.isRequired,
  addIdPlant: Proptypes.func.isRequired,
  nbPlant: Proptypes.number.isRequired,
  currentPage: Proptypes.number.isRequired,
  lastPage: Proptypes.func.isRequired,
  firstPage: Proptypes.func.isRequired,
  previousPage: Proptypes.func.isRequired,
  nextPage: Proptypes.func.isRequired,
  addPlantInputChange: Proptypes.func.isRequired,
  onButtonSubmit: Proptypes.func.isRequired,
  pseudoPlant: Proptypes.string.isRequired,
  plantListApi: Proptypes.shape({
    list: Proptypes.arrayOf(
      Proptypes.shape({
        id: Proptypes.number,
        name: Proptypes.string,
        family: Proptypes.string,
        Description: Proptypes.string,
      }),
    ).isRequired,
  }).isRequired,
};

export default Catalog;
