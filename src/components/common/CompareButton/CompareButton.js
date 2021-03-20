import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

const CompareButton = ({ id, name, img, addToCompare, allCompareProductsList }) => {
  const compareHandler = product => {
    const productsInCompare = allCompareProductsList.filter(
      item => item.id === product.id
    ).length;

    const maxQtyProductsInCompare = 4;

    if (allCompareProductsList.length < maxQtyProductsInCompare && !productsInCompare) {
      addToCompare(product);
    }
  };

  return (
    <Button variant='outline' onClick={() => compareHandler({ id, name, img })}>
      {' '}
      <Icon icon={faExchangeAlt}>Compare</Icon>
    </Button>
  );
};

CompareButton.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  img: PropTypes.string,
  addToCompare: PropTypes.func,
  allCompareProductsList: PropTypes.array,
};

export default CompareButton;
