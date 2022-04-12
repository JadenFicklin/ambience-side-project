import styled from 'styled-components'
import { center } from 'styles'

export const Title = styled.h1`
  text-align: center;
  font-size: 100px;
  margin: 50px 0 0 0;
`

export const ContentWrapper = styled.div`
  ${center}
`

export const AudioClipWrapper = styled.div`
  ${center}
  flex-wrap: wrap;
  max-width: 800px;
`

export const BackgroundButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 30px;
  border: none;
  background: rgba(255, 255, 255, 0);
  color: white;
  font-weight: bold;
  padding: 10px 30px;
  border-radius: 30px;
  transition: 0.25s;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`
