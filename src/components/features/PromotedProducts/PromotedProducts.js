import React from 'react';
import styles from './PromotedProducts.module.scss';
import Button from '../../common/Button/Button';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Swipeable from '../../common/Swipeable/Swipeable';
import HotDeal from '../../common/HotDeal/HotDeal';

class PromotedProducts extends React.Component {
  state = {
    autoplay: true,
    activePage: 0,
    isFading: false,

    leftActivePage: 0,
    leftFade: false,
    leftManualPageChange: false,
  };

  leftHandlePageChange(newPage) {
    this.setState({ leftFade: true });
    setTimeout(
      () =>
        this.setState({
          leftActivePage: newPage,
          leftFade: false,
          leftManualPageChange: true,
          autoplay: false,
        }),
      100
    );
  }

  leftHandleRightAction = () => {
    const { leftActivePage, leftManualPageChange } = this.state;
    if (leftManualPageChange) {
      this.clearAutoplayTimeout();
      this.setState({ leftManualPageChange: false });
    } else if (leftActivePage > 0) {
      this.clearAutoplayTimeout();
      this.setState({ leftActivePage: leftActivePage - 1, autoplay: false });
    }
  };

  leftHandleLeftAction = () => {
    const { leftActivePage, leftManualPageChange } = this.state;
    if (leftManualPageChange) {
      this.clearAutoplayTimeout();
      this.setState({ leftManualPageChange: false });
    } else {
      this.clearAutoplayTimeout();
      this.setState({ leftActivePage: leftActivePage + 1, autoplay: false });
    }
  };

  setAutoplay() {
    if (this.autoplay === undefined) {
      this.setState({
        autoplay: true,
      });
      this.autoplay = setInterval(() => {
        const { leftActivePage } = this.state;
        if (leftActivePage < this.categoryProducts.length - 1) {
          this.setState({ leftFade: true });
          setTimeout(
            () =>
              this.setState({
                leftActivePage: leftActivePage + 1,
                leftFade: false,
                leftManualPageChange: true,
              }),
            100
          );
        } else {
          this.setState({ leftFade: true });
          setTimeout(
            () =>
              this.setState({
                leftActivePage: 0,
                leftFade: false,
                leftManualPageChange: true,
              }),
            100
          );
        }
      }, 3000);
    }
  }

  clearAutoplayTimeout() {
    if (this.autoplayTimeout !== undefined) {
      clearTimeout(this.autoplayTimeout);
      this.autoplayTimeout = undefined;
    }
  }

  componentDidMount() {
    this.setAutoplay();
  }

  componentDidUpdate() {
    if (!this.state.autoplay && this.autoplayTimeout === undefined) {
      clearInterval(this.autoplay);
      this.autoplay = undefined;
      this.autoplayTimeout = setTimeout(() => this.setAutoplay(), 7000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.autoplay);
    this.autoplay = undefined;
  }

  render() {
    const { products } = this.props;
    const { leftActivePage } = this.state;
    this.categoryProducts = products.filter(item => item.hotDeal === true);

    const dots = [];
    for (let i = 0; i < this.categoryProducts.length; i++) {
      dots.push(
        <li>
          <a
            href='/#'
            onClick={event => {
              event.preventDefault();
              return this.leftHandlePageChange(i);
            }}
            className={i === leftActivePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div className={styles.dealsWrapper}>
                <div className={styles.deals}>
                  <h3>HOT DEALS</h3>
                  {/* <div className={styles.dots}>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                  </div> */}

                  <div className={'col-auto ' + styles.dots}>
                    <ul>{dots}</ul>
                  </div>
                </div>
                <Swipeable
                  activePage={this.state.leftActivePage}
                  rightAction={this.leftHandleRightAction}
                  leftAction={this.leftHandleLeftAction}
                >
                  {this.categoryProducts.map(item => (
                    <div
                      key={item.id}
                      className={this.state.leftFade ? styles.fadeOut : styles.fadeIn}
                    >
                      <HotDeal {...item} />
                    </div>
                  ))}
                </Swipeable>
              </div>
            </div>
            <div className='col-md-8'>
              <div className={styles.bannerWrapper}>
                <div className={styles.overaly}></div>
                {/* <div className={styles.titles}>
                  <h1>INDOOR</h1>
                  <h1>FURNITURE</h1>
                </div>
                <h4>SAVE UP TO 50% OF ALL FURNITURE</h4> */}
                <Button className={styles.buttonWhite}>SHOP NOW</Button>
                <div className={styles.buttons}>
                  <Button className={styles.buttonArrow}>
                    <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                  </Button>
                  <Button className={styles.buttonArrow}>
                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PromotedProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

export default PromotedProducts;
