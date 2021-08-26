// Import : npm
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Import : Local
import SinglePlantApi from '../components/SinglePlantApi';

import { getPlantBySlug } from '../selectors/plantlist';

// Import : actions

const mapState = (state, ownProps) => {
  const { slug } = ownProps.match.params;
  return {
    plant: getPlantBySlug(state.plantListApi.list, slug),
  };
};

const mapDispatch = null;

export default withRouter(connect(mapState, mapDispatch)(SinglePlantApi));
