/* eslint-disable jsx-a11y/no-static-element-interactions, no-unused-expressions */
/* eslint-disable react/prop-types */
import React from 'react';
import { Grid, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';

import mapDispatchToProps from './mapDispatchToProps';
import mapStateToProps from './mapStateToProps';
import styles from './index.scss';

// const flag = false;

// function onPopUp(id) {
//   flag = true;
//   console.log(id);
// }

const Home = ({ contents, isOpen, toggleOpen }) => (
  <Grid className={styles.container}>
    {console.log('contents:', contents)}
    <div className={styles.viewPort}>
      <div className={styles.gridWrap}>
        {contents.map(content => (
          <div
            key={content.image}
            className={styles.imgWrap}
          >
            <img alt="" src={content.image} id={content.image} onClick={toggleOpen} />
          </div>
        ))}
      </div>
    </div>
    <Modal show={isOpen} onHide={toggleOpen}>
      <Modal.Header closeButton>
        <Modal.Title>Taipei
          <span>Creator: Criss Cheng</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="contentWrap">
          <div className="leftWrap">
            <img alt="" src="https://s3.amazonaws.com/vr-fe-hackathon/images/IMG_0389.jpg" />
          </div>
          <div className="rightWrap">
            <div className="wrap">
              <h3>Description</h3>
              <p>The most common questions about Taipei is that why we
                 don&apos;t build high buildings and skyscrapers.
                If you compare Hong Kong to Taipei, you don&apos;t expect to experience height here.
                However, the fact is there is way too many earthquakes in Taiwan....</p>
            </div>
            <div className="wrap">
              <h3>How i shot it</h3>
              <p>Original size 62х42 cm., 300 dpi. <br />
                  Canon 60D + adapter Commlite EF-NEX for Canon EF + <br />
                Canon EF 100-400mm f / 4.5-5.6L IS II USM. <br />
                  Date: 7/11/2015
              </p>
            </div>
            <div className="wrap third">
              <h3>Location</h3>
              <img alt="" src="https://s3.amazonaws.com/vr-fe-hackathon/images/map_efwljf.png" />
            </div>
          </div>
          <div className="btn">Explore A Trip</div>
        </div>
      </Modal.Body>
    </Modal>
  </Grid>
);

Home.propTypes = {
  contents: React.PropTypes.arrayOf(React.PropTypes.object),
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  // updateOnMountAndKeysChange(),
  withState('isOpen', 'setIsOpen', false),
  withHandlers({
    toggleOpen: ({ setIsOpen, isOpen }) => (event) => {
      console.log(event.target.id);
      setIsOpen(!isOpen);
    },
  }),
)(Home);
