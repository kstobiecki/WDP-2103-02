import React from 'react';
import PropTypes from 'prop-types';
import styles from './ComparedProduct.module.scss';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

const removeBtn = removeFromCompare => (
  <Button onClick={() => removeFromCompare()}>
    <Icon icon={faTimes}></Icon>
  </Button>
);

const ComparedProducts = ({ image }) => {
  return (
    <div className={styles.component}>
      <img src={image} alt='comparing' />
      <div className={styles.imageHover}>{removeBtn}</div>
    </div>
  );
};

ComparedProducts.propTypes = {
  image: PropTypes.string,
  removeFromCompare: PropTypes.func,
};

export default ComparedProducts;
