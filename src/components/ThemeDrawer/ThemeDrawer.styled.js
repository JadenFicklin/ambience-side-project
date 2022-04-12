import styled, { css } from 'styled-components'
import * as Backgrounds from 'assets/images'
import { center } from 'styles'

export const ThemeDrawer = styled.div(
  ({ active }) => css`
    position: fixed;
    top: ${active ? '0' : '100%'};
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    backdrop-filter: blur(20px);
    overflow-y: auto;
    background: rgba(255, 255, 255, 0.1);
    transition: 0.5s;
  `,
)

export const ContentWrapper = styled.div`
  ${center}
`

export const ThemeWrapper = styled.div`
  ${center}
  flex-wrap: wrap;
  max-width: 1500px;
`

export const BackgroundWrapper = styled.div`
  ${center}
  flex-direction: column;
  margin: 30px;
`

export const Background = styled.div(
  ({ selected, background, color }) => css`
    height: 200px;
    width: 200px;
    border-radius: 25px;
    background: url(${Backgrounds?.[background]});
    background-size: cover;
    background-positon: center center;
    opacity: 0.75;
    transition: 0.25s;
    outline: ${selected && `3px solid ${color}`};

    &:hover {
      opacity: 1;
    }
  `,
)
