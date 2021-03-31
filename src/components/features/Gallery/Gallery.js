import React from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';

import Button from '../../common/Button/Button';
import Swipeable from '../../common/Swipeable/Swipeable';
import style from './Gallery.module.scss';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';

class Gallery extends React.Component {
  state = {
    activeProduct: {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      oldPrice: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      image:
        'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80',
    },
    activeTab: 'featured',
    activePage: 0,
    slidesArr: this.props.products.filter(item => item.newFurniture === true),
  };

  changeCategoryTab(newTab) {
    this.setState({ activeTab: newTab });
  }

  moveRight() {
    const pagesCount = Math.ceil(this.state.slidesArr.length / 6);
    if (this.state.activePage < pagesCount - 1) {
      this.setState(prevState => ({
        activePage: prevState.activePage + 1,
      }));
    }
  }

  moveLeft() {
    const pagesCount = Math.ceil(this.state.slidesArr.length / 6);
    if (this.state.activePage > 0 && this.state.activePage < pagesCount) {
      this.setState(prevState => ({
        activePage: prevState.activePage - 1,
      }));
    }
  }

  render() {
    const { products } = this.props;

    const categories = [
      { id: 'featured', name: 'featured' },
      { id: 'topSeller', name: 'top seller' },
      { id: 'saleOff', name: 'sale off' },
      { id: 'topRated', name: 'top rated' },
    ];

    const { activeTab, activePage, activeProduct } = this.state;

    const slidesToDisplay = this.state.slidesArr.slice(
      activePage * 6,
      (activePage + 1) * 6
    );

    return (
      <div className={style.root}>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <div className={style.header}>
                <h3>Furniture gallery</h3>
              </div>
              <div className={style.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeTab && style.active}
                        onClick={event => {
                          event.preventDefault();
                          this.changeCategoryTab(item.id);
                        }}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={style.productSlider}>
                <div className={style.product}>
                  <img src={activeProduct.image} alt='product' />
                  <div className={style.buttons}>
                    <ReactTooltip type='dark' place='right' />
                    <Button data-tip='Add to favorites'>
                      <Icon icon={faHeart} className={style.icon}>
                        Favorite
                      </Icon>
                    </Button>
                    <Button data-tip='Add to compare'>
                      <Icon icon={faExchangeAlt} className={style.icon}>
                        Add to compare
                      </Icon>
                    </Button>
                    <Button data-tip='View details'>
                      <Icon icon={faEye} className={style.icon}>
                        View details
                      </Icon>
                    </Button>
                    <Button data-tip='Add to basket'>
                      <Icon icon={faShoppingBasket} className={style.icon}>
                        Add to basket
                      </Icon>
                    </Button>
                  </div>
                  <div className={style.content}>
                    <div className={style.decorTopLeft} />
                    <h5>{activeProduct.name}</h5>
                    <div className={style.stars}>
                      {[1, 2, 3, 4, 5].map(stars => (
                        <a key={stars} href='#'>
                          {stars <= activeProduct.stars ? (
                            <Icon icon={faStar}>{stars} stars</Icon>
                          ) : (
                            <Icon icon={farStar}>{stars} stars</Icon>
                          )}
                        </a>
                      ))}
                    </div>
                    <div className={style.decorBottomRight} />
                    <div className={style.price}>
                      <h3>${activeProduct.price}</h3>
                      <h5>${activeProduct.oldPrice}</h5>
                    </div>
                  </div>
                </div>
                <Swipeable activeItem={this.state.activePage}>
                  <div className={style.slider}>
                    <Button
                      className={style.prev}
                      onClick={event => {
                        event.preventDefault();
                        this.moveLeft();
                      }}
                    >
                      <p>{'<'}</p>
                    </Button>
                    <div className={style.slides}>
                      {slidesToDisplay.map(slide => (
                        <img
                          key={slide.id}
                          src={slide.image}
                          alt='pic'
                          className={
                            slide.image === activeProduct.image
                              ? style.slidePicture + ' ' + style.active
                              : style.slidePicture
                          }
                        />
                      ))}
                    </div>
                    <Button
                      className={style.next}
                      onClick={event => {
                        event.preventDefault();
                        this.moveRight();
                      }}
                    >
                      <p>{'>'}</p>
                    </Button>
                  </div>
                </Swipeable>
              </div>
            </div>
            <div className={'col-6 ' + style.picture}>
              <img src={products[6].image} alt='prod3' />
              <div className={style.pictureDetails}>
                <h3>
                  from <span>${products[6].price}</span>
                </h3>
                <h1>{products[6].name}</h1>
                <Button className={style.shopNowBtn}>Shop now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      category: PropTypes.string,
      favorite: PropTypes.bool,
      image: PropTypes.string,
      name: PropTypes.string,
      newFurniture: PropTypes.bool,
      oldPrice: PropTypes.number,
      price: PropTypes.number,
      promo: PropTypes.string,
      stars: PropTypes.number,
    })
  ),
};

export default Gallery;
