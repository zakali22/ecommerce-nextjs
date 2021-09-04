/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const Page = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.any,
};

export default Page;
