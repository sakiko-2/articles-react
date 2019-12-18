import React from 'react';
import loaderStyles from './Loader.module.scss';

const Loader = () => (
  <div className={loaderStyles.container}>
    <span className={'button is-loading', loaderStyles.loader} />
  </div>
);

export default Loader;
