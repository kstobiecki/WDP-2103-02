import { connect } from 'react-redux';
import React from 'react';
import CompareProducts from './CompareProducts';
import { getNew } from '../../../redux/productsRedux.js';
import {
  getAllToCompare,
  removeProductFromCompare,
} from '../../../redux/compareRedux.js';

const mapStateToProps = state => ({
  products: getNew(state),
  allComperedProducts: getAllToCompare(state),
});

const mapDispatchToProps = dispatch => ({
  removeFromCompared: id => dispatch(removeProductFromCompare(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompareProducts);
