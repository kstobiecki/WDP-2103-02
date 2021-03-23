import React from 'react';
import PropTypes from 'prop-types';
import style from './ProductCompare.module.scss';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ProductCompare = ({ image, removeFromCompare }) => (
  <div className={style.component}>
    <img src={image} alt='compare' />
    <div className={style.image}>
      <Button onClick={() => removeFromCompare()}>
        <Icon icon={faTimes}></Icon>
      </Button>
    </div>
  </div>
);

ProductCompare.propTypes = {
  image: PropTypes.string,
  removeFromCompare: PropTypes.func,
};

export default ProductCompare;
