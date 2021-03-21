import { connect } from 'react-redux';
import ProductBox from './ProductBox';

import { getAll } from '../../../redux/productsRedux';
import { compare, getProductsToCompare } from '../../../redux/comparedRedux';

const mapStateToProps = state => ({
  products: getAll(state),
  comparison: getProductsToCompare(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  compare: () =>
    dispatch(
      compare({
        id: props.id,
        ...props,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
