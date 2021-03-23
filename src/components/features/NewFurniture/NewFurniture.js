import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
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
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  render() {
    const { categories, products, vpMode } = this.props;
    const { activeCategory, activePage } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);

    const pagesCount =
      vpMode === 'mobile'
        ? Math.ceil(categoryProducts.length / this.mobile.elementsOnPage)
        : vpMode === 'tablet'
        ? Math.ceil(categoryProducts.length / this.tablet.elementsOnPage)
        : Math.ceil(categoryProducts.length / this.desktop.elementsOnPage);

    const displayElem =
      vpMode === 'mobile'
        ? categoryProducts.slice(activePage, activePage + 1)
        : vpMode === 'tablet'
        ? categoryProducts.slice(
            activePage * this.tablet.elementsOnPage,
            (activePage + 1) * this.tablet.elementsOnPage
          )
        : categoryProducts.slice(
            activePage * this.desktop.elementsOnPage,
            (activePage + 1) * this.desktop.elementsOnPage
          );

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory && styles.active}
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div className='row'>
            {displayElem.map(item => (
              <div key={item.id} className={`col-12 col-xl-3 col-lg-6`}>
                <ProductBox {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
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
  vpMode: PropTypes.string,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
