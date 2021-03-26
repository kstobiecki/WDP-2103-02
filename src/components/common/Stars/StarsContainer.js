import { connect } from 'react-redux';
import Stars from './Stars';
import { createAction_changeUserStars } from '../../../redux/productsRedux';

const mapDispatchToProps = dispatch => ({
  changeUserStars: (id, star) =>
    dispatch(createAction_changeUserStars({ id: id, star: star })),
});

export default connect(null, mapDispatchToProps)(Stars);
