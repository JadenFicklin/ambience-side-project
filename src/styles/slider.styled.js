import { css } from 'styled-components'
import { hexOpacity } from 'utils'

// excess height to improve interactive area / accessibility
const height = '16px'
const thumbHeight = 16
const trackHeight = '4px'

// colours
const upperBackground = (text) =>
  `linear-gradient(to bottom, ${text}${hexOpacity[100]}, ${text}${hexOpacity[100]}) 100% 50% / 100% ${trackHeight} no-repeat transparent`
const lowerBackground = (text) =>
  `linear-gradient(to bottom, ${text}${hexOpacity[50]}, ${text}${hexOpacity[50]}) 100% 50% / 100% ${trackHeight} no-repeat transparent`

// Webkit cannot style progress so we fake it with a long shadow on the thumb element
const makeLongShadow = (color, size) => {
  let i = 18
  let shadow = `${i}px 0 0 ${size} ${color}`

  for (; i < 706; i++) {
    shadow = `${shadow}, ${i}px 0 0 ${size} ${color}`
  }

  return shadow
}

export const slider = ({ theme: { text } }) => css`
  overflow: hidden;
  display: block;
  appearance: none;
  max-width: 700px;
  width: 100%;
  margin: 0;
  height: ${height};
  cursor: pointer;
  background: transparent;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: ${height};
    background: ${lowerBackground(text)};
    border-radius: 50px;
  }

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: ${thumbHeight}px;
    width: ${thumbHeight}px;
    background: ${text}${hexOpacity[90]};
    border-radius: 100%;
    border: 0;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: ${makeLongShadow(text, '-10px')};
    transition: background-color 150ms;
  }

  &::-moz-range-track,
  &::-moz-range-progress {
    width: 100%;
    height: ${height};
    background: ${upperBackground(text)};
  }

  &::-moz-range-progress {
    background: ${lowerBackground(text)};
  }

  &::-moz-range-thumb {
    appearance: none;
    margin: 0;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: ${text}${hexOpacity[90]};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
  }

  &::-ms-track {
    width: 100%;
    height: ${height};
    border: 0;
    /* color needed to hide track marks */
    color: transparent;
    background: transparent;
  }

  &::-ms-fill-lower {
    background: ${lowerBackground(text)};
  }

  &::-ms-fill-upper {
    background: ${upperBackground(text)};
  }

  &::-ms-thumb {
    appearance: none;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: ${text}${hexOpacity[90]};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
    /* IE Edge thinks it can support -webkit prefixes */
    top: 0;
    margin: 0;
    box-shadow: none;
  }

  &:hover,
  &:focus {
    &::-webkit-slider-thumb {
      background-color: ${text}${hexOpacity[100]};
    }
    &::-moz-range-thumb {
      background-color: ${text}${hexOpacity[100]};
    }
    &::-ms-thumb {
      background-color: ${text}${hexOpacity[100]};
    }
  }
`
