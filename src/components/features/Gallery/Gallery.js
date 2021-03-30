import React from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';

import Button from '../../common/Button/Button';
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
    activeTab: 'featured',
    activePage: 0,
    activeProduct: {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      oldPrice: 45,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      favorites: true,
      compare: true,
      image:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    },
  };

  setActiveProduct(item) {
    this.setState({
      activeProduct: {
        id: item.id,
        favorite: item.favorite,
        image: item.image,
        name: item.name,
        newFurniture: item.newFurniture,
        oldprice: item.oldprice,
        price: item.price,
        promo: item.promo,
        stars: item.stars,
      },
    });
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
    const slidesArr = products.filter(item => item.newFurniture === true);
    const slidesToDisplay = slidesArr.slice(activePage * 6, (activePage + 1) * 6);

    return (
      <div className={style.root}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-sm-12'>
              <div className={style.header}>
                <h3>Furniture gallery</h3>
              </div>
              <div className={style.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a className={item.id === activeTab && style.active}>
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
                    <ReactTooltip type='light' place='right' />
                    <Button variant='gallery' data-tip='Add to favorites'>
                      <Icon icon={faHeart} className={style.icon}>
                        Favorite
                      </Icon>
                    </Button>
                    <Button variant='gallery' data-tip='Add to compare'>
                      <Icon icon={faExchangeAlt} className={style.icon}>
                        Add to compare
                      </Icon>
                    </Button>
                    <Button variant='gallery' data-tip='View details'>
                      <Icon icon={faEye} className={style.icon}>
                        View details
                      </Icon>
                    </Button>
                    <Button variant='gallery' data-tip='Add to basket'>
                      <Icon icon={faShoppingBasket} className={style.icon}>
                        Add to basket
                      </Icon>
                    </Button>
                  </div>
                  <div className={style.content}>
                    <div className={style.triangleTopLeft} />
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
                    <div className={style.triangleBottomRight} />
                    <div className={style.price}>
                      <h3>${activeProduct.price}</h3>
                      <h5>${activeProduct.oldPrice}</h5>
                    </div>
                  </div>
                </div>
                <div className={style.slider}>
                  <Button className={style.prev}>
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
                            ? style.slidePic + ' ' + style.active
                            : style.slidePic
                        }
                      />
                    ))}
                  </div>
                  <Button className={style.next}>
                    <p>{'>'}</p>
                  </Button>
                </div>
              </div>
            </div>
            <div className={'col-6 ' + style.staticPicture}>
              <img src={products[5].image} alt='prod3' />
              <div className={style.staticPictureDetails}>
                <h3>
                  from <span>${products[5].price}</span>
                </h3>
                <h1>{products[5].name}</h1>
                <Button variant='green'>Shop now</Button>
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
      oldprice: PropTypes.number,
      price: PropTypes.number,
      promo: PropTypes.string,
      stars: PropTypes.number,
    })
  ),
};

export default Gallery;
