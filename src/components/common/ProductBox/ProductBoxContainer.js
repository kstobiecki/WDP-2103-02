import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { getAllToCompare } from '../../../redux/compareRedux';

const mapStateToProps = state => ({
  allComperedProducts: getAllToCompare(state),
});

export default connect(mapStateToProps)(ProductBox);
