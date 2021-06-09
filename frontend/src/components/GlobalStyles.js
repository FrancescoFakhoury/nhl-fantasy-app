import { createGlobalStyle } from "styled-components";

export const breakpoints = { tablet: "600px" };

export default createGlobalStyle`
:root {
    --orange: RGB(255, 138, 0);
    --red: red;
    --font-family: 'Nanum Gothic', sans-serif;  
    --second-card: RGBA(255,255,255);
    --darkblue: #0b223e;
    --font-family-graduate: 'Graduate', sans-serif;
}

html, body {
    margin: 0;
    height: 100vh
}
`;
