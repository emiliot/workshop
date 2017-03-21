import React from 'react';
import {Link} from 'react-router-dom';

import classNames from 'classnames/bind';
import Styles from './styles.scss';
const cx = classNames.bind(Styles)

const Home = () => (
  <div className={cx('app')}>
    <h1>Hello, there</h1>
    <Link to='/hello'> Go to Hello </Link>
  </div>
)

export default Home;
