import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import layoutStyles from './Layout.module.scss';

const Layout = (props) => (
  <>
    <NavBar />
    <div className={layoutStyles.container}>
      {props.children}
    </div>
    <Footer />
  </>
);

export default Layout;
