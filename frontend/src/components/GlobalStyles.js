import { createGlobalStyle } from "styled-components";

export const breakpoints = { tablet: "600px" };

export default createGlobalStyle`
:root {
    --orange: RGB(255, 138, 0);
    --turquoise: rgb(64,224,208);
    --font-family: 'Nanum Gothic', sans-serif;  
    --second-card: RGBA(255,255,255);
}

html, body {
    margin: 0;
}
`;
