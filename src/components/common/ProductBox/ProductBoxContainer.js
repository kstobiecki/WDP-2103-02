import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { getAll } from '../../../redux/categoriesRedux';
import {
  getNew,
  createAction_addFavorites,
  createAction_removeFavorites,
  comparingToggle,
} from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
});

const mapDispatchToProps = dispatch => ({
  addToFavorites: productId => dispatch(createAction_addFavorites(productId)),
  removeFromFavorites: productId => dispatch(createAction_removeFavorites(productId)),
  comparingToggle: productId => dispatch(comparingToggle(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
