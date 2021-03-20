import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import styles from './FeatureBox.module.scss';

const FeatureBox = ({ active, icon, children }) => (
  <div className={styles.root + (active ? ' ' + styles.active : '')}>
    <a href='#'>
      {icon && (
        <div className={styles.iconWrapper}>
          <Icon className={styles.icon} icon={icon} />
        </div>
      )}
      <div className={styles.content}>{children}</div>
    </a>
  </div>
);

FeatureBox.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.object,
  active: PropTypes.bool,
};

export default FeatureBox;
