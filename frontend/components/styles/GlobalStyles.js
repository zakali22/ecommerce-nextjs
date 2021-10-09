import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'radnika_next';
        src: url(/static/radnikanext-medium-webfont.woff2) format('woff2');
        font-weight: 400;
        font-style: normal
    }

    :root {
        --black: #393939;
        --red: #ff0000;
        --grey: #3A3A3A;
        --lightGray: #e1e1e1;
        --offsetWhite: #ededed;
        --maxWidth: 1000px;
        --bs: 0 12px 24px 0 rgba(0,0,0,0.09)
    }

    *, *::before, *::after {
        box-sizing: border-box
    }

    html {
        box-sizing: inherit;
        font-size: 62.5%; /* 1rem = 10px; */
    }

    body {
        font-size: 1.5rem;
        font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    a, button {
        font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    a {
        text-decoration: none;
        color: inherit;

        &:hover, &:focus {
            text-decoration: none;
            color: inherit
        }
    }
`;

export default GlobalStyles;
