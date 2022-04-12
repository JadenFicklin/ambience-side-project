import { css } from 'styled-components'
import * as Backgrounds from 'assets/images'

export const global = ({ theme }) => css`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    background: url(${Backgrounds?.[theme?.background]});
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    color: ${theme?.text || 'white'};
  }
`
