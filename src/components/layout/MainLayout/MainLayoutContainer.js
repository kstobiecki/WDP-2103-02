import { connect } from 'react-redux';
import MainLayout from './MainLayout';
import { getVPMode, setVP } from '../../../redux/viewportRedux.js';

const mapStateToProps = state => ({
  vpMode: getVPMode(state),
});

const mapDispatchToProps = dispatch => ({
  setVPMode: newMode => dispatch(setVP(newMode)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
