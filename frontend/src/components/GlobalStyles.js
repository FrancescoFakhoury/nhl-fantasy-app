import {createGlobalStyle} from "styled-components";

export const breakpoints = {tablet: "600px"};

export default createGlobalStyle`
:root {
    --orange: RGB(255, 138, 0);
    --font-family: 'Nanum Gothic', sans-serif;
    --first-grey: #212121;
    --second-grey: #424242;
    --third-grey: #616161;
    --fourth-grey: #757575;
}

html, body {
    margin: 0;
}
`