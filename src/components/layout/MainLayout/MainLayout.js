import React, { useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const rwdVPCheck = () => {
  const mobileVP = '(max-width: 576px)';
  const tabletVP = '(max-width: 968px)';

  if (window.matchMedia(`${mobileVP}`).matches) {
    return 'mobile';
  } else if (window.matchMedia(`${tabletVP}`).matches) {
    return 'tablet';
  } else {
    return 'desktop';
  }
};

const MainLayout = ({ children }) => {
  const setVPMode = () => rwdVPCheck();

  useEffect(() => {
    window.addEventListener('resize', newMode => setVPMode());
  });
  return (
    <div>
      <ReactTooltip type='dark' place='right' />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
  setVPMode: PropTypes.func,
};

export default MainLayout;
