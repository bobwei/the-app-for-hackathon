import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

import styles from './index.scss';

const Days = () => (
  <div>
    <div
      style={{ backgroundImage: 'url(https://bobwei.github.io/helloworld-assets/city.jpg)' }}
      className={styles.cityPhoto}
    />
    <Button type="button" className={styles.button} block componentClass={Link} to="/search/booking/25.04/121.51/days">
      Make it real!
    </Button>
  </div>
);

export default Days;
