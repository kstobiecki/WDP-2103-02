import { connect } from 'react-redux';
import { comparedProduct, setCompare } from '../../../redux/productsRedux';
import CompareProduct from './ProductsToCompare';

const mapStateToProps = state => ({
  products: comparedProduct(state),
});

const mapDispatchToProps = dispatch => ({
  setCompare: productId => dispatch(setCompare(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompareProduct);
