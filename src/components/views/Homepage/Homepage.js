import React from 'react';
// import PropTypes from 'prop-types';

import Promotion from '../../features/Promotion/Promotion';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import PromotedProducts from '../../features/PromotedProducts/PromotedProducts';

const Homepage = () => (
  <div className={styles.root}>
    <PromotedProducts />
    <FeatureBoxes />
    <Promotion />
    <NewFurniture />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
