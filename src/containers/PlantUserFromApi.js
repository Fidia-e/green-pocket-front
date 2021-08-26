// Import : npm
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Import : Local
import SinglePlantUser from '../components/SinglePlantUser';

import { getPlantBySlug } from '../selectors/plantlist';

// Import : actions

const mapState = (state, ownProps) => {
  const { slug } = ownProps.match.params;
  return {
    plant: getPlantBySlug(state.plantUserReducer.list, slug),
  };
};

const mapDispatch = null;

export default withRouter(connect(mapState, mapDispatch)(SinglePlantUser));
