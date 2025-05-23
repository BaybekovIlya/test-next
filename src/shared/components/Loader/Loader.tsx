import React from 'react';

import css from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={css['loader-container']}>
      <div className={css.loader}></div>
    </div>
  );
};

export default Loader;