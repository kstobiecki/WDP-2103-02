import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import style from './CompareBox.module.scss';
import Button from '../../common/Button/Button';

const ProductsToCompareBox = ({ name, id, image, setCompare, compare }) => (
  <div className={style.compareContainer}>
    <div className={style.iconContainer}>
      <Button
        active={compare}
        onClick={e => {
          setCompare(id);
          e.preventDefault();
        }}
      >
        <Icon className={style.icon} icon={faTimes} />
      </Button>
    </div>
    <img className={style.image} src={image} alt='compared' />
    <div className={style.compareName}>{name}</div>
  </div>
);

ProductsToCompareBox.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  setCompare: PropTypes.func,
  compare: PropTypes.bool,
};

export default ProductsToCompareBox;
