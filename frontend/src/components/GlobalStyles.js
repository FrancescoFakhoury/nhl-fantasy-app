import {createGlobalStyle} from "styled-components";

export const breakpoints = {tablet: "600px"};

export default createGlobalStyle`
:root {
    --orange: RGB(255, 138, 0);
    --font-family: 'Nanum Gothic', sans-serif;
    --first-grey: #121212;
    --second-grey: #1e1e1e;
    --third-grey: #2e2e2e;
    --fourth-grey: #424242;
}

html, body {
    margin: 0;
}
`