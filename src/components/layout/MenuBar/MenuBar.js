import React from 'react';
import PropTypes from 'prop-types';
import ProductSearch from '../../features/ProductSearch/ProductSearch';
import ResposiveMenu from '../../common/ResposiveMenu/ResposiveMenu.js';
import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className={'row align-items-center' + styles.navBar}>
        <div className={'col ' + styles.productSearch}>
          <ProductSearch />
        </div>
        <div className={'col-auto ' + styles.menu}>
          <ResposiveMenu className={styles.responsiveMenu} />
        </div>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
