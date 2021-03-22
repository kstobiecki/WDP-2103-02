import React from 'react';
import PropTypes from 'prop-types';
import styles from './CompareProducts.module.scss';

const ComparedProducts = ({ allCompareProductsList, removeFromCompared }) => {
  const comparsion = (products, remove) => {
    return (
      <div className={styles.container}>
        {products.map(({ img, id, name }) => (
          <div key={id} className={styles.image}>
            <img src={img} alt={`${name}`} />
            <div className={styles.close} onClick={() => remove()}>
              X
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      {allCompareProductsList.length &&
        comparsion(allCompareProductsList, removeFromCompared)}
    </>
  );
};

ComparedProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  allCompareProductsList: PropTypes.array,
  removeFromCompared: PropTypes.func,
};

export default ComparedProducts;
