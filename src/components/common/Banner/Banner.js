import React from 'react';
import styles from './Banner.module.scss';
import Button from '../../common/Button/Button';

const Banner = () => (
  <div className={styles.root}>
    <div className={styles.overaly}></div>
    <div className={styles.titles}>
      <h1>INDOOR</h1>
      <h1>FURNITURE</h1>
    </div>
    <h4>SAVE UP TO 50% OF ALL FURNITURE</h4>
    <Button className={styles.buttonWhite}>SHOP NOW</Button>
  </div>
);

export default Banner;
