import styled from 'styled-components';

export const ProductListingStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;
