import { themeAtom, themeDrawerOpenAtom } from 'atoms'
import { themes } from 'mocks'
import { useRecoilValue, useRecoilState } from 'recoil'
import * as S from './ThemeDrawer.styled'

export default () => {
  const [selectedTheme, setTheme] = useRecoilState(themeAtom)
  const themeDrawerOpen = useRecoilValue(themeDrawerOpenAtom)

  return (
    <S.ThemeDrawer active={themeDrawerOpen}>
      <S.ContentWrapper>
        <S.ThemeWrapper>
          {themes.map((theme) => (
            <S.BackgroundWrapper key={theme.name}>
              <p>{theme.name}</p>
              <S.Background
                onClick={() => setTheme(theme)}
                background={theme.background}
                selected={theme.name === selectedTheme.name}
                color={theme.color}
              />
            </S.BackgroundWrapper>
          ))}
        </S.ThemeWrapper>
      </S.ContentWrapper>
    </S.ThemeDrawer>
  )
}
