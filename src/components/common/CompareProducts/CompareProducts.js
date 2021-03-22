import React from 'react';
import PropTypes from 'prop-types';
import styles from './CompareProducts.module.scss';
import Button from '../Button/Button';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CompareProducts = ({ images, removeFromComparison }) => {
  return (
    <div className={styles.component}>
      <img src='{image}' alt='compared-products' />
      <div className={styles.imgCompare}>
        <Button onClick={() => removeFromComparison()}>
          <Icon icon={faTimes}></Icon>
        </Button>
      </div>
    </div>
  );
};

CompareProducts.propTypes = {
  images: PropTypes.string,
  removeFromComparison: PropTypes.func,
};

export default CompareProducts;
