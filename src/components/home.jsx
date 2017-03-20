import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Hello, there</h1>
    <Link to='/hello'> Go to Hello </Link>
  </div>
)

export default Home;
