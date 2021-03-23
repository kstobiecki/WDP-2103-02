import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  image,
  addToFavorites,
  removeFromFavorites,
  addToCompare,
  id,
  favorites,
  compare,
  oldPrice,
}) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <img src={image} alt={name} />
      {promo && <div className={styles.sale}>{promo}</div>}
      <div className={styles.buttons}>
        <Button variant='small'>Quick View</Button>
        <Button variant='small'>
          <Icon icon={faShoppingBasket}></Icon> ADD TO CART
        </Button>
      </div>
    </div>
    <div className={styles.content}>
      <h5>{name}</h5>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map(i => (
          <a key={i} href='#'>
            {i <= stars ? (
              <Icon icon={faStar}>{i} stars</Icon>
            ) : (
              <Icon icon={farStar}>{i} stars</Icon>
            )}
          </a>
        ))}
      </div>
    </div>
    <div className={styles.line}></div>
    <div className={styles.actions}>
      <div className={styles.outlines}>
        <Button
          className={favorites ? styles.favorites : styles.outlines}
          onClick={e => {
            e.preventDefault();
            favorites ? removeFromFavorites({ id }) : addToFavorites({ id });
          }}
          variant='outline'
        >
          <Icon icon={faHeart}>Favorite</Icon>
        </Button>
        <Button onClick={() => addToCompare()} variant={'outline'}>
          <Icon icon={faExchangeAlt}>Add to compare</Icon>
        </Button>
      </div>
      <div>
        {oldPrice !== 0 && (
          <span className={styles.oldPrice}> it was: ${oldPrice}</span>
        )}
      </div>
      <div className={styles.price}>
        <Button noHover variant='small'>
          $ {price}
        </Button>
      </div>
    </div>
  </div>
);

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  favorites: PropTypes.bool,
  addToFavorites: PropTypes.func,
  removeFromFavorites: PropTypes.func,
  addToCompare: PropTypes.func,
  id: PropTypes.string,
  compare: PropTypes.array,
  image: PropTypes.string,
  oldPrice: PropTypes.number,
};

export default ProductBox;
