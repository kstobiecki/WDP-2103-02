import React from 'react';
import PropTypes from 'prop-types';
import style from './CompareProduct.module.scss';
import CompareBox from './CompareBox';
import Button from '../../common/Button/Button';

const ProductCompare = ({ products, setCompare }) => {
  if (products.length === 0) {
    return null;
  }

  return (
    <div className={style.compareFixedContainer}>
      <div className='style.compareBox'>
        {products.map(cprItem => (
          <CompareBox key={cprItem.id} setCompare={setCompare} {...cprItem} />
        ))}
        <div className={style.btn}>
          <Button className={style.compareBtn}>Compare</Button>
        </div>
      </div>
    </div>
  );
};

ProductCompare.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      id: PropTypes.string,
      name: PropTypes.string,
      newFurniture: PropTypes.bool,
      image: PropTypes.string,
      price: PropTypes.number,
      promo: PropTypes.string,
      stars: PropTypes.number,
    })
  ),
  setCompare: PropTypes.func,
};

export default ProductCompare;
