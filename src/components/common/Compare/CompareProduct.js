import React from 'react';
import PropTypes from 'prop-types';
import style from './CompardProduct.module.scss';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

const CompareProduct = ({ image, removeFromCompare }) => (
  <div className={style.component}>
    <img src={image} alt='comparing' />
    <div className={style.imageLayer}>
      <Button onClick={() => removeFromCompare()}>
        <Icon icon={faTimes}></Icon>
      </Button>
    </div>
  </div>
);

CompareProduct.propTypes = {
  image: PropTypes.string,
  removeFromCompare: PropTypes.func,
};

export default CompareProduct;
