import React from 'react';
import styles from './Banner.module.scss';
import Button from '../../common/Button/Button';

// import Swipeable from '../Swipeable/Swipeable';
import ReactSwipe from 'react-swipe';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  let reactSwipeEl;

  return (
    <div>
      <ReactSwipe
        className='carousel'
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        <div className={styles.bannerFirst}>
          <div className={styles.overaly}></div>
          <div className={styles.titles}>
            <h1>INDOOR</h1>
            <h1>FURNITURE</h1>
          </div>
          <h4>SAVE UP TO 30% OF ALL FURNITURE</h4>
          <Button className={styles.buttonWhite}>SHOP NOW</Button>
        </div>
        <div className={styles.bannerSecond}>
          <div className={styles.overaly}></div>
          <div className={styles.titles}>
            <h1>INDOOR</h1>
            <h1>FURNITURE</h1>
          </div>
          <h4>NEW COLLECTION</h4>
          <Button className={styles.buttonWhite}>SHOP NOW</Button>
        </div>
        <div className={styles.bannerThird}>
          <div className={styles.overaly}></div>
          <div className={styles.titles}>
            <h1>INDOOR</h1>
            <h1>FURNITURE</h1>
          </div>
          <h4>SAVE UP TO 50% OF ALL FURNITURE</h4>
          <Button className={styles.buttonWhite}>SHOP NOW</Button>
        </div>
      </ReactSwipe>
      <div className={styles.buttons}>
        <Button className={styles.buttonArrow} onClick={() => reactSwipeEl.prev()}>
          <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
        </Button>
        <Button className={styles.buttonArrow} onClick={() => reactSwipeEl.next()}>
          <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
        </Button>
      </div>
    </div>
  );
};

export default Banner;
