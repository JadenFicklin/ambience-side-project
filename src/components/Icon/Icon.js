import React from 'react'
import { useRecoilValue } from 'recoil'
import { themeAtom } from 'atoms'
import * as S from './Icon.styled'

export default ({ src, ...props }) => {
  const theme = useRecoilValue(themeAtom)

  return <S.Icon src={src} fill={theme?.text || 'white'} {...props} />
}
