import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from './CompareBar.module.scss';
import Button from '../../common/Button/Button';

const CompareBar = ({ id, image, comparingToggle, compare }) => (
  <div className={styles.component}>
    <img src={image} alt='comparing' />
    <div className={styles.imageLayer}>
      <Button
        active={compare}
        onClick={e => {
          comparingToggle(id);
          e.preventDefault();
        }}
      >
        <Icon className={styles.icon} icon={faTimes} />
      </Button>
    </div>
  </div>
);

CompareBar.propTypes = {
  image: PropTypes.string,
  id: PropTypes.string,
  comparingToggle: PropTypes.func,
  compare: PropTypes.bool,
};

export default CompareBar;
