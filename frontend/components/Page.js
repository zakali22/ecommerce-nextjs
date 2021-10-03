import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from './Header';
import GlobalStyles from './styles/GlobalStyles';

const PageContainer = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 1.5rem;
`;

const Page = ({ children }) => (
  <div>
    <GlobalStyles />
    <Header />
    <PageContainer>{children}</PageContainer>
  </div>
);

Page.propTypes = {
  children: PropTypes.any,
};

export default Page;
