import { Global, css } from "@emotion/react";

export const GlobalStyles = () => (
  <Global
    styles={css`
      html {
        box-sizing: border-box;
      }
      *,
      *:before,
      *:after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
        font-family: "Afacad Flux", sans-serif;
      }
      body {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        color: #333;
      }
    `}
  />
);
