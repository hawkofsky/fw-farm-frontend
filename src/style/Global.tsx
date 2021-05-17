import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@hawkofsky/whirlflashx-uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Poppins", sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    background-image: ${({ theme }) => theme.colors.backgroundImage};
    // background-image: url('images/light_background.jpg');

    img {
      height: auto;
      max-width: 100%;
    }
  }
  .desktop-icon {
    margin-top: -34px;
    overflow: visible;
  }
  .desktop-icon image {
    height: auto;
    width: auto;
  }
`

export default GlobalStyle
