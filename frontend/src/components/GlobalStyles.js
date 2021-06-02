import {createGlobalStyle} from "styled-components";

export const breakpoints = {tablet: "600px"};

export default createGlobalStyle`
:root {
    --orange: RGB(255, 138, 0);
    --font-family: 'Nanum Gothic', sans-serif;
    --first-card: #fdb469;
    --second-card: #ffd399;
}

html, body {
    margin: 0;
}
`