import React from 'react';
import PropTypes from 'prop-types';
import { Swipe } from 'react-swipe-component';

const Swipeable = ({ children, swipeAction, activeItem, itemsCount }) => {
  const onSwipedRight = () => {
    if (activeItem - 1 >= 0) {
      swipeAction(activeItem - 1);
    }
  };

  const onSwipedLeft = () => {
    if (activeItem + 1 < itemsCount) {
      swipeAction(activeItem + 1);
    }
  };

  return (
    <Swipe
      nodeName='div'
      detectTouch='true'
      onSwipedLeft={onSwipedLeft}
      onSwipedRight={onSwipedRight}
    >
      {children}
    </Swipe>
  );
};

Swipeable.propTypes = {
  children: PropTypes.node,
  swipeAction: PropTypes.func,
  activeItem: PropTypes.number,
  itemsCount: PropTypes.number,
};

export default Swipeable;
