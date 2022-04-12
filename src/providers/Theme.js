import { useRecoilValue } from 'recoil'
import { themeAtom } from 'atoms'
import { ThemeProvider } from 'styled-components'

export default ({ children }) => {
  const theme = useRecoilValue(themeAtom)

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
