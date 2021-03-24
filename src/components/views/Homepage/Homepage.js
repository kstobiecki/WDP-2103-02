import React from 'react';
// import PropTypes from 'prop-types';

import Promotion from '../../features/Promotion/Promotion';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <Promotion />
    <NewFurniture />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
