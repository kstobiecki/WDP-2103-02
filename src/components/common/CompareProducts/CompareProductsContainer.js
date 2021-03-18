import { connect } from 'react-redux';
import CompareProducts from './CompareProducts';
import { removeFromComparison } from '../../../redux/comparedRedux';

const mapDispatchToProps = (dispatch, props) => ({
  removeFromComparison: () =>
    dispatch(
      removeFromComparison({
        ...props,
      })
    ),
});

export default connect(null, mapDispatchToProps)(CompareProducts);
