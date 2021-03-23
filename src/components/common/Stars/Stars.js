import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Stars.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const Stars = ({ id, stars, userStars, ...props }) => {
  const [hover] = useState(null);
  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map(i => {
        let count = stars;
        if (userStars) {
          count = stars;
        }
        if (hover) {
          count = hover;
        }
        return (
          <a key={1} href={'#'} className={userStars ? styles.userStars : ''}>
            {i <= count ? (
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={farStar}></FontAwesomeIcon>
            )}
          </a>
        );
      })}
    </div>
  );
};

Stars.propTypes = {
  stars: PropTypes.number,
  id: PropTypes.string,
  userStars: PropTypes.number,
};

export default Stars;
