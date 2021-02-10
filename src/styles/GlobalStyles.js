import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

body {
  padding: 0;
	margin: 0;
	margin: auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	touch-action: manipulation;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
	outline: none !important;
	-webkit-user-select: initial !important;
  -khtml-user-select: initial !important;
  -moz-user-select: initial !important;
  -ms-user-select: initial !important;
	user-select: initial !important;
	-webkit-tap-highlight-color: transparent;
}

`

export default GlobalStyles
