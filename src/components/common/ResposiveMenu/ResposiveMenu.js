import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styles from '../../layout/MenuBar/MenuBar.module.scss';

const ResposiveMenu = () => (
  <Navbar collapseOnSelect expand='sm' variant='light' className={styles.navbar}>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
    <Navbar.Collapse id='responsive-navbar-nav'>
      <Nav className={styles.menuWrapper}>
        <a href='#' className={styles.active}>
          HOME
        </a>
        <a href='#' className={styles.menuChild}>
          FURNITURE
        </a>
        <a href='#' className={styles.menuChild}>
          TABLE
        </a>
        <a href='#' className={styles.menuChild}>
          SOFA
        </a>
        <a href='#' className={styles.menuChild}>
          BEDROOM
        </a>
        <a href='#' className={styles.menuChild}>
          BLOG
        </a>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default ResposiveMenu;
