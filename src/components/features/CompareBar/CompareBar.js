import React from 'react';
import PropTypes from 'prop-types';
import style from './CompareBar.module.scss';

import Button from '../../common/Button/Button';
import CompareProduct from '../../common/Compare/CompareProductContainer';

const CompareBar = ({ comparing }) =>
  comparing.length > 0 ? (
    <div className={style.component}>
      <div>
        {comparing.map(productData => (
          <CompareProduct key={productData.id} {...productData} />
        ))}
      </div>
      <Button className={style.button}>Compare</Button>
    </div>
  ) : (
    ''
  );

CompareBar.propTypes = {
  comparing: PropTypes.array,
};

export default CompareBar;
