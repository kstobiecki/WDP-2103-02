import React from 'react';
import PropTypes from 'prop-types';

import styles from './Feedback.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

class Feedback extends React.Component {
  state = {
    activePage: 0,
  };
  render() {
    const { activePage } = this.state;
    const { opinions } = this.props;
    const dots = [];
    for (let i = 0; i < 3; i++) {
      dots.push(
        <li key={i}>
          <a className={i === activePage && styles.active}>page {i}</a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        {opinions[0] && (
          <div className='container'>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end'>
                <div className={'col-auto ' + styles.heading}>
                  <h3>Client feedback</h3>
                </div>
                <div className={'col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className={'col ' + styles.quote}>
                <FontAwesomeIcon icon={faQuoteRight} className={styles.quotes}>
                  stars
                </FontAwesomeIcon>
                <div className={styles.opinion}>{opinions[0].opinion}</div>
                <div className={styles.user}>
                  <div className={styles.user_image}>
                    <img src={opinions[0].image} alt={opinions[0].profession}></img>
                  </div>
                  <div className={styles.user_name}>
                    <h4>{opinions[0].name}</h4>
                    <p>{opinions[0].profession}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

Feedback.propTypes = {
  opinions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      profession: PropTypes.string,
      image: PropTypes.string,
      opinion: PropTypes.string,
    })
  ),
};

export default Feedback;
