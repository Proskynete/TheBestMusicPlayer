import React from 'react';
import config from '../../config/config';
import './index.scss';

const Header = () =>
  (
    <header className="header">
      <h1>{config.applicationName}</h1>
    </header>
  );

export default Header;
