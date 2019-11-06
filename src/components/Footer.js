import React from 'react';
import footerStyles from './Footer.module.scss';

const Footer = () => {
  const year = new Date().getFullYear();
  const years = year === 2019 ? '2019' : `2019-${year}`;

  return (
    <footer>
      <div className={footerStyles.content}>
        &copy;{` Copyright ${years} Sakiko. All rights reserved.`}
      </div>
    </footer>
  );
};

export default Footer;
