import React from 'react';
import PropTypes from 'prop-types';

import styles from './Brands.module.scss';

const Brands = ({ image }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className={'col'}>
          <div className={`${styles.box}`}>
            <img
              src='https://images.pexels.com/photos/4829083/pexels-photo-4829083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              alt=''
            ></img>
          </div>
        </div>
        <div className={'col'}>
          <div className={`${styles.box}`}>
            <img
              src='https://images.pexels.com/photos/164903/pexels-photo-164903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              alt=''
            ></img>
          </div>
        </div>
        <div className={'col'}>
          <div className={`${styles.box}`}>
            <img
              src='https://images.pexels.com/photos/2885683/pexels-photo-2885683.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              alt=''
            ></img>
          </div>
        </div>
        <div className={'col'}>
          <div className={`${styles.box}`}>
            <img
              src='https://images.pexels.com/photos/1011848/pexels-photo-1011848.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              alt=''
            ></img>
          </div>
        </div>
        <div className={'col'}>
          <div className={`${styles.box}`}>
            <img
              src='https://images.pexels.com/photos/379929/pexels-photo-379929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              alt=''
            ></img>
          </div>
        </div>
        <div className={'col'}>
          <div className={`${styles.box}`}>
            <img
              src='https://images.pexels.com/photos/1796283/pexels-photo-1796283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              alt=''
            ></img>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Brands.propTypes = {
  image: PropTypes.node,
};

export default Brands;
