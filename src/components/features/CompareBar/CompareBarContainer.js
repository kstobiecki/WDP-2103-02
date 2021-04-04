import { connect } from 'react-redux';
import CompareBar from './CompareBar';
import { getProductsToCompare } from '../../../redux/compareRedux';

const mapStateToProps = state => ({
  comparing: getProductsToCompare(state),
});

export default connect(mapStateToProps)(CompareBar);
