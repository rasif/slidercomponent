import {createGlobalStyle} from 'styled-components';

const globalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: black;
    }

    html, body {
        min-height: 100vh;
    }

    .page {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        font-family: 'Roboto', sans-serif; 
        font-weight: 300;   
    }
`;

export default globalStyle;
