import styled from 'styled-components'
import { center, slider } from 'styles'

export const AudioTile = styled.div`
  ${center}
  flex-direction: column;
  text-align: center;
  width: 100px;
  margin: 30px;
`

export const Title = styled.h2`
  ${center}
  height: 70px;
`

export const Audio = styled.audio`
  display: none;
`

export const VolumeSlider = styled.input`
  ${slider}
  opacity: 0;
  transition: 0.25s;
  margin: 30px 0 0 0;

  ${AudioTile}:hover & {
    opacity: 1;
  }
`
