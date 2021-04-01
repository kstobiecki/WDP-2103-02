import { connect } from 'react-redux';
import HotDeal from './HotDeal';

import { changeCompareList } from '../../../redux/productsRedux';

const mapDispatchToProps = dispatch => ({
  changeCompareList: id => dispatch(changeCompareList(id)),
});

export default connect(null, mapDispatchToProps)(HotDeal);
