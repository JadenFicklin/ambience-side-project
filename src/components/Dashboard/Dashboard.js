import { AudioTile } from 'components'
import { audioClips } from 'mocks'
import { BackgroundButton, ThemeDrawer } from 'components'
import * as S from './Dashboard.styled'

export default () => {
  return (
    <div>
      <S.Title>Ambience</S.Title>
      <S.ContentWrapper>
        <S.AudioClipWrapper>
          {audioClips.map(({ ...props }) => (
            <AudioTile key={props.name} {...props} />
          ))}
        </S.AudioClipWrapper>
      </S.ContentWrapper>
      <BackgroundButton text="Change background" />
      <ThemeDrawer />
    </div>
  )
}
