import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faStar, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import CompareButton from '../CompareButton/CompareButtonContainer';

const ProductBox = ({
  id,
  name,
  price,
  promo,
  stars,
  favorite,
  compare,
  image,
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
        <Button variant='outline' active={favorite}>
          <Icon icon={faHeart}>Favorite</Icon>
        </Button>
        <CompareButton id={id} name={name} img={image} />
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
  id: PropTypes.string,
  img: PropTypes.string,
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  favorite: PropTypes.bool,
  compare: PropTypes.bool,
  image: PropTypes.string,
  oldPrice: PropTypes.number,
};

export default ProductBox;
