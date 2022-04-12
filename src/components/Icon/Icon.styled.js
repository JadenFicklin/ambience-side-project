import styled, { css } from 'styled-components'
import InlineSVG from 'react-inlinesvg'

export const Icon = styled(InlineSVG)(
  ({ fill, selected }) => css`
    width: ${selected ? '100px' : '90px'};
    opacity: ${selected ? '0.9' : '0.25'};
    transition: 0.25s;

    &:hover {
      opacity: ${selected ? '1' : '0.75'};
      width: 100px;
    }

    & path {
      fill: ${fill};
      transition: fill 0.25s;
    }
  `,
)
