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
import Banner from '../../common/Banner/Banner';

class PromotedProducts extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    isFading: false,
  };

  mobile = {
    elementsOnPage: 1,
  };

  tablet = {
    elementsOnPage: 2,
  };
  desktop = {
    elementsOnPage: 8,
  };

  handlePageChange(newPage) {
    this.setState({ isFading: true });
    setTimeout(() => {
      this.setState({ activePage: newPage });
    }, 500);
    setTimeout(() => {
      this.setState({ isFading: false });
    }, 500);
  }

  render() {
    const { promotedProducts, vpMode } = this.props;
    const { activeCategory, activePage, isFading } = this.state;

    const categoryProducts = promotedProducts.filter(
      item => item.category === activeCategory
    );

    const pagesCount =
      vpMode === 'mobile'
        ? Math.ceil(categoryProducts.length / this.mobile.elementsOnPage)
        : vpMode === 'tablet'
        ? Math.ceil(categoryProducts.length / this.tablet.elementsOnPage)
        : Math.ceil(categoryProducts.length / this.desktop.elementsOnPage);

    // const dots = [];
    // for (let i = 0; i < pagesCount; i++) {
    //   dots.push(
    //     <span
    //       onClick={() => this.handlePageChange(i)}
    //       className={i === activePage && styles.active}
    //     >
    //       page {i}
    //     </span>
    //   );
    // }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div className={styles.dealsWrapper}>
                <div className={styles.deals}>
                  <h3>HOT DEALS</h3>
                  <div className={styles.dots}>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                  </div>
                </div>
                <HotDeal />
              </div>
            </div>
            <div className='col-md-8'>
              <div className={styles.bannerWrapper}>
                {/* <img className={styles.bannerPhoto} alt="sliderImage" ></img> */}
                {/* <div className={styles.overaly}></div>
                <div className={styles.titles}>
                  <h1>INDOOR</h1>
                  <h1>FURNITURE</h1>
                </div>
                <h4>SAVE UP TO 50% OF ALL FURNITURE</h4>
                <Button className={styles.buttonWhite}>SHOP NOW</Button> */}
                <Banner />
                {/* <div className={styles.buttons}>
                  <Button className={styles.buttonArrow}>
                    <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                  </Button>
                  <Button className={styles.buttonArrow}>
                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                  </Button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// PromotedProducts.propTypes = {
//   promotedProducts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       category: PropTypes.string,
//       price: PropTypes.number,
//       stars: PropTypes.number,
//       promo: PropTypes.string,
//       newFurniture: PropTypes.bool,
//     })
//   ),
// };

PromotedProducts.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  promotedProducts: PropTypes.arrayOf(
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
  vpMode: PropTypes.string,
};

PromotedProducts.defaultProps = {
  promotedProducts: [],
};

export default PromotedProducts;
