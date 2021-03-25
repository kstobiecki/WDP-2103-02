import React from 'react';
import styles from './PromotedProducts.module.scss';
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

const PromotedProducts = ({
  name,
  price,
  promo,
  stars,
  image,
  addToFavorites,
  removeFromFavorites,
  id,
  favorites,
  compare,
  oldPrice,
}) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div className={styles.dealsWrapper}>
              <div className={styles.deals}>
                <h3>HOT DEALS</h3>
                <div className={styles.dots}>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                </div>
              </div>
              <div className={styles.promotedImage}>
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
                <h5>Aenean Ru Bristique</h5>
                <div className={styles.stars}>
                  {[1, 2, 3, 4, 5].map(i => (
                    <a key={i} href='#'>
                      {i <= stars ? (
                        <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                      ) : (
                        <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                      )}
                    </a>
                  ))}
                </div>
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
                    <FontAwesomeIcon icon={faExchangeAlt}>
                      Add to compare
                    </FontAwesomeIcon>
                  </Button>
                </div>
                <div>
                  {oldPrice !== 0 && <span className={styles.oldPrice}> $350.00</span>}
                </div>
                <div className={styles.price}>
                  <Button noHover variant='small'>
                    $300.00
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-8'>
            <div className={styles.bannerWrapper}>
              <div className={styles.overaly}></div>
              <h1>INDOOR</h1>
              <h1>FURNITURE</h1>
              <h4>SAVE UP TO 50% OF ALL FURNITURE</h4>
              <div className={styles.buttons}>
                <Button className={styles.buttonWhite}>SHOP NOW</Button>
                <div className={styles.buttons}>
                  <Button variant='small'>
                    <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                  </Button>
                  <Button variant='small'>
                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                  </Button>
                </div>
              </div>
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
};

export default PromotedProducts;
