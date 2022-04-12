import { useState, useEffect, useRef } from 'react'
import { Icon } from 'components'
import * as AudioClips from 'assets/audio'
import * as Icons from 'assets/icons'
import * as S from './AudioTile.styled'

export default ({ name, audio, icon, autoPlay }) => {
  const [playing, setPlaying] = useState(autoPlay)
  const [volume, setVolume] = useState(100)
  const audioRef = useRef()

  const play = () => {
    setPlaying(true)
    audioRef.current.play()
  }

  const pause = () => {
    setPlaying(false)
    audioRef.current.pause()
  }

  const togglePlaying = () => (playing ? pause() : play())

  useEffect(() => {
    audioRef.current.volume = volume / 100
  }, [volume])

  return (
    <S.AudioTile>
      <S.Title>{name}</S.Title>
      <Icon
        height="100"
        src={Icons?.[icon]}
        alt={icon}
        selected={playing}
        onClick={togglePlaying}
      />
      <S.Audio loop autoPlay={autoPlay} ref={audioRef}>
        <source src={AudioClips?.[audio]} type="audio/mpeg" />
      </S.Audio>
      <S.VolumeSlider
        type="range"
        min="0"
        max="100"
        onChange={({ target }) => setVolume(target.value)}
        value={volume}
      />
    </S.AudioTile>
  )
}
