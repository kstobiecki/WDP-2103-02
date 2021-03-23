import { connect } from 'react-redux';
import ProductCompare from './ProductCompare';
import { removeFromCompare } from '../../../redux/compareRedux';

const mapDispatchToProps = (dispatch, props) => ({
  removeFromCompare: () =>
    dispatch(
      removeFromCompare({
        ...props,
      })
    ),
});

export default connect(null, mapDispatchToProps)(ProductCompare);
