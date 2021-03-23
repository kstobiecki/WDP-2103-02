import { connect } from 'react-redux';
import CompareBox from './CompareBox';
import { getProductsToCompare } from '../../../redux/compareRedux';

const mapStateToProps = state => ({
  compare: getProductsToCompare(state),
});

export default connect(mapStateToProps)(CompareBox);
