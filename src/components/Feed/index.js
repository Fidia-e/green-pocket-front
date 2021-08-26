// Import
import React from 'react';
import { Share, MessageCircle, Heart } from 'react-feather';

// Local Import
import './style.scss';

const Feed = () => (
  <div className="feed">
    <div className="feed--content">
      <div className="content--top">
        <h3> Fil d'actualité </h3>
      </div>
      <div className="content--middle">
        <div className="list--posts">
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
        </div>
      </div>
      <div className="content--bottom">
        <div className="message">
          <input className="message--input" type="text" placeholder="message..." />
          <button className="message--button" type="button">Envoyer</button>
        </div>
      </div>
    </div>
  </div>
);

export default Feed;

// Component "CardPost" for dynamisation :
const CardPost = () => (
  <div className="cardPost">
    <h4>Pseudo du user</h4>
    <p>Je vous post mon super cactus fraichement planté ce matin! Il est trop cool et il s'appelle Fidia! yeah!</p>
    <p> Toryeu que c'est cheap cette esti de cochonnerie-là. Je crisse mon camp d'icite anyway, je déguedine au plus sacrant, ça sent la cibole de marde.</p>
    <div className="cardPost--buttons">
      <button
        className="comment hover"
        type="button"
      >
        <MessageCircle className="button--icon--comment" />
      </button>
      <button
        className="like hover"
        type="button"
      >
        <Heart className="button--icon--like" />
      </button>
      <button
        className="share hover"
        type="button"
      >
        <Share className="button--icon--share" />
      </button>
    </div>
  </div>
);
