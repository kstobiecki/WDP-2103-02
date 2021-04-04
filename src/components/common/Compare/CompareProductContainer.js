import { connect } from 'react-redux';
import CompareProduct from './CompareProduct';
import { removeFromCompare } from '../../../redux/compareRedux';

const mapDispatchToProps = (dispatch, props) => ({
  removeFromCompare: () =>
    dispatch(
      removeFromCompare({
        ...props,
      })
    ),
});

export default connect(null, mapDispatchToProps)(CompareProduct);
