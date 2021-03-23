import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import {
  getAll,
  createAction_addFavorites,
  createAction_removeFavorites,
} from '../../../redux/productsRedux';
import { getProductsToCompare, addToCompare } from '../../../redux/compareRedux';

const mapStateToProps = state => ({
  products: getAll(state),
  compare: getProductsToCompare(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  addToFavorites: productId => dispatch(createAction_addFavorites(productId)),
  removeFromFavorites: productId => dispatch(createAction_removeFavorites(productId)),
  addToCompare: () =>
    dispatch(
      addToCompare({
        id: props.id,
        ...props,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
