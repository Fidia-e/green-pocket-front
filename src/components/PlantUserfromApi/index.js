// Import
import React from 'react';

import { Link, useParams } from 'react-router-dom';

// Local Import
import '../App/style.scss';
import './style.scss';

const SinglePlantUser = () => {
  const { slug } = useParams();
  console.log(slug);
  return (
    <div className="section-right">
      Ma plante user
    </div>
  );
};

export default SinglePlantUser;
