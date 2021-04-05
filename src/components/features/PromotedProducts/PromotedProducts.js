import React from 'react';
import styles from './PromotedProducts.module.scss';
import PropTypes from 'prop-types';

import Banner from '../../common/Banner/Banner';
import HotDeal from '../../common/HotDeal/HotDeal';

const PromotedProducts = ({
  name,
  image,
  stars,
  addToFavorites,
  removeFromFavorites,
  id,
  favorites,
  compare,
  oldPrice,
  userStars,
}) => {
  let reactSwipeEl;
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div className={styles.dealsWrapper}>
              <HotDeal />
            </div>
          </div>
          <div className='col-md-8'>
            <div className={styles.bannerWrapper}>
              <Banner />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PromotedProducts.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  favorites: PropTypes.bool,
  addToFavorites: PropTypes.func,
  removeFromFavorites: PropTypes.func,
  id: PropTypes.string,
  compare: PropTypes.bool,
  image: PropTypes.string,
  oldPrice: PropTypes.number,
  userStars: PropTypes.number,
};

export default PromotedProducts;
