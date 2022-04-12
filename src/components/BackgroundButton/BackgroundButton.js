import { themeDrawerOpenAtom } from 'atoms'
import { useRecoilState } from 'recoil'
import * as S from './BackgroundButton.styled'

export default ({ text }) => {
  const [themeDrawerOpen, setThemeDrawerOpen] =
    useRecoilState(themeDrawerOpenAtom)

  return (
    <S.BackgroundButton onClick={() => setThemeDrawerOpen(!themeDrawerOpen)}>
      {themeDrawerOpen ? 'Exit' : 'Change background'}
    </S.BackgroundButton>
  )
}
