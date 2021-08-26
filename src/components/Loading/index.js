// Import
import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

// Local Import
import '../App/style.scss';
import './style.scss';

const Loading = () => (
  <div className="loading_page">
    <Loader
      type="Puff"
      color="#D68D60"
      height={100}
      width={100}
      timeout={3000}
    />
  </div>
);

export default Loading;
