// Import
import React from 'react';
import PropTypes from 'prop-types';
import { Edit } from 'react-feather';

// Local Import
// import profilCover from '../../assets/images/profil-cover.png';
// import profilPic from '../../assets/images/profil-pic.png';
import './style.scss';

const Profil = ({ currentUser, profilEdit, onEditInput }) => {
  console.log('PROFIL');
  const classActiveEdit = profilEdit ? '' : 'edit-not-active';
  return (
    <div className="section-right">
      <div className="view_profil">
        <div className="view_profil--content">
          <div className="background--picture">
            <div className="picture_user">
              <span className="icon-user_picture"><Edit /></span>
            </div>
            <span className="icon-back_picture"><Edit /></span>
          </div>
          <div className="content_user">
            <form className="form_profil">
              <div className="fields--left">
                <div className="form_profil--input">
                  <p>{currentUser.firstName}</p>
                  <input className={classActiveEdit} type="texte" name="firstName" value="" />
                </div>
                <div className="form_profil--input">
                  <p>{currentUser.lastName}</p>
                  <input className={classActiveEdit} type="texte" name="lasttName" value="" />
                </div>
                <div className="form_profil--input">
                  <p>Pseudo :</p>
                  <input className={classActiveEdit} type="text" name="pseudo" value="" />
                </div>
                <div className="form_profil--input">
                  <p>Ville : {currentUser.country}</p>
                  <input className={classActiveEdit} type="texte" name="country" value="" />
                </div>
                <div className="form_profil--input">
                  <p>Code Postal : {currentUser.citycode}</p>
                  <input className={classActiveEdit} type="number" name="cp" value="" />
                </div>
              </div>
              <div className="fields--right">
                <div className="form_profil--input">
                  <p>{currentUser.email}</p>
                  <input className={classActiveEdit} type="email" name="email" value="jean-meudesoif@sacavin.com" />
                </div>
                <div className="form_profil--input">
                  <p>Date de naissance :</p>
                  <input className={classActiveEdit} type="date" name="date" value="" />
                </div>
                <div className="form_profil--input">
                  <p>Mot de passe : ****</p>
                  <input className={classActiveEdit} type="password" name="password" value="" />
                </div>
              </div>
            </form>
            <button type="button" onClick={onEditInput} className="btn-toggle-edit">
              Modifier mes données
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
Profil.propTypes = {
  currentUser: PropTypes.shape().isRequired,
  profilEdit: PropTypes.bool.isRequired,
  onEditInput: PropTypes.func.isRequired,
};

export default Profil;
