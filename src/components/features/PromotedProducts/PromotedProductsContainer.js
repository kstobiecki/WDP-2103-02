import { connect } from 'react-redux';

import PromotedProducts from './PromotedProducts';

import { getNew } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getNew(state),
});

export default connect(mapStateToProps)(PromotedProducts);
