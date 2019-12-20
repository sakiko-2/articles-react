import React from 'react';
import footerStyles from './Footer.module.scss';

const Footer = () => (
  <footer>
    <div className={footerStyles.content}>
      &copy;
      Copyright 2019 Sakiko. All rights reserved.
    </div>
  </footer>
);

export default Footer;
