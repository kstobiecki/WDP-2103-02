import React from 'react';
import styles from './HotDeal.module.scss';
import Button from '../../common/Button/Button';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';

import Stars from '../../common/Stars/StarsContainer';

const HotDeal = ({
  name,
  price,
  stars,
  image,
  addToFavorites,
  removeFromFavorites,
  id,
  favorites,
  compare,
  oldPrice,
  userStars,
}) => (
  <div className={styles.root}>
    <div className={styles.promotedImage}>
      <img src={image} alt={name} />
      <div className={styles.addToCard}>
        <Button variant='small' className={styles.addToCardButton}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faShoppingBasket}
          ></FontAwesomeIcon>{' '}
          ADD TO CART
        </Button>
      </div>
      <div className={styles.timeToPromote}>
        <div className={styles.circle}>
          <h2>25</h2>
          <h4>DAYS</h4>
        </div>
        <div className={styles.circle}>
          <h2>10</h2>
          <h4>HRS</h4>
        </div>
        <div className={styles.circle}>
          <h2>45</h2>
          <h4>MINS</h4>
        </div>
        <div className={styles.circle}>
          <h2>30</h2>
          <h4>SECS</h4>
        </div>
      </div>
    </div>
    <div className={styles.content}>
      <h5>Aenean-ru-bristique-1</h5>
      <Stars id={id} stars={stars} userStars={userStars} />
    </div>
    <div className={styles.line}></div>
    <div className={styles.actions}>
      <div className={styles.outlines}>
        <Button variant='outline'>
          <FontAwesomeIcon icon={faEye}>Favorite</FontAwesomeIcon>
        </Button>
        <Button
          className={favorites ? styles.favorites : styles.outlines}
          onClick={e => {
            e.preventDefault();
            favorites ? removeFromFavorites({ id }) : addToFavorites({ id });
          }}
          variant='outline'
        >
          <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
        </Button>
        <Button variant='outline' active={compare}>
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
      </div>
      <div>{oldPrice !== 0 && <span className={styles.oldPrice}> $350.00</span>}</div>
      <div className={styles.price}>
        <Button noHover variant='small'>
          $300.00
        </Button>
      </div>
    </div>
  </div>
);

HotDeal.propTypes = {
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

export default HotDeal;
