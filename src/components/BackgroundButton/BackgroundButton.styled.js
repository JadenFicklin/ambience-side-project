import styled from 'styled-components'

export const BackgroundButton = styled.button`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 30px;
  border: none;
  background: rgba(255, 255, 255, 0);
  color: white;
  font-weight: bold;
  padding: 10px 30px;
  border-radius: 30px;
  z-index: 2;
  transition: 0.25s;
  width: 200px;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`
