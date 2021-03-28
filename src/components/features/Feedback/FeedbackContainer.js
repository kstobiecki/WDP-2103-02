import { connect } from 'react-redux';
import Feedback from './Feedback';
import { getAll } from '../../../redux/opinionsRedux';

const mapStateToProps = state => ({
  opinions: getAll(state),
});

export default connect(mapStateToProps)(Feedback);
