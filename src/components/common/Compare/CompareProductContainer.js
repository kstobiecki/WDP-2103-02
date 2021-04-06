import { connect } from 'react-redux';
import { comparedProducts, comparingToggle } from '../../../redux/productsRedux.js';
import CompareProducts from './CompareProduct';

const mapStateToProps = state => ({
  products: comparedProducts(state),
});

const mapDispatchToProps = dispatch => ({
  comparingToggle: productId => dispatch(comparingToggle(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompareProducts);
