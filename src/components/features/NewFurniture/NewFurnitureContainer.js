import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import { getVPMode } from '../../../redux/viewportRedux';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  vpMode: getVPMode(state),
});

export default connect(mapStateToProps)(NewFurniture);
