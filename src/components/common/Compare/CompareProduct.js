import React from 'react';
import styles from './CompareProduct.module.scss';
import PropTypes from 'prop-types';
import CompareBar from '../../features/CompareBar/CompareBar';
import Button from '../../common/Button/Button';

const CompareProducts = ({ products, comparingToggle }) => {
  if (products.length === 0) {
    return null;
  }
  return (
    <div className={styles.bar}>
      <div className='row'>
        {products.map(item => (
          <CompareBar {...item} key={item.id} comparingToggle={comparingToggle} />
        ))}

        <div className={styles.btnContainer}>
          <Button
            variant='main'
            className={styles.compareBtn}
            onClick={e => {
              e.preventDefault();
            }}
          >
            Compare
          </Button>
        </div>
      </div>
    </div>
  );
};

CompareProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
      photo: PropTypes.string,
    })
  ),
  comparingToggle: PropTypes.func,
};
export default CompareProducts;
