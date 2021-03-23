import React from 'react';
import PropTypes from 'prop-types';
import style from './CompareBar.module.scss';
import Button from '../../common/Button/Button';
import ProductCompare from '../../common/ProductCompare/ProductCompareContainer';

const CompareBar = ({ compare }) => {
  return compare.lenght > 0 ? (
    <div className={style.component}>
      <div>
        {compare.map(product => (
          <ProductCompare key={product.id} {...product} />
        ))}
      </div>
      <Button className={style.button}> Compare </Button>
    </div>
  ) : (
    ''
  );
};

CompareBar.propTypes = {
  compare: PropTypes.array,
};

export default CompareBar;
