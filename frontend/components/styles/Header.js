import styled from 'styled-components';

export const HeaderStyle = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-columns: 1fr;

  .search-wrapper {
    input {
      width: 100%;
      padding: 8px 5px;
      border: none;
      border-bottom: 1px solid var(--black, black);
      font-size: 1.5rem;
    }
  }
`;
