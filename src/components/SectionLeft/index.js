// Import
import React from 'react';

// Import Local
import MiniProfil from '../../containers/MiniProfil';
import Feed from '../Feed';
import '../App/style.scss';
import './style.scss';

const SectionLeft = () => (
  <div className="section-left">
    <MiniProfil />
    <Feed />
  </div>
);

export default SectionLeft;
