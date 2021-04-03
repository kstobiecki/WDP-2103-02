import React from 'react';
// import PropTypes from 'prop-types';
import Gallery from '../../features/Gallery/GalleryContainer';
import Promotion from '../../features/Promotion/Promotion';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import PromotedProducts from '../../features/PromotedProducts/PromotedProducts';
import Feedback from '../../features/Feedback/FeedbackContainer';

import Brands from '../../features/Brands/Brands';

const Homepage = () => (
  <div className={styles.root}>
    <PromotedProducts />
    <FeatureBoxes />
    <Promotion />
    <NewFurniture />
    <Gallery />
    <Brands />
    <Feedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
