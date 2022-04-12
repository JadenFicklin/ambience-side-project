import { atom } from 'recoil'

export const themeAtom = atom({
  key: 'theme',
  default: {
    name: 'Rain',
    background: 'rainBackground',
    text: '#ffffff',
    color: '#16521c',
  },
})

export const themeDrawerOpenAtom = atom({
  key: 'themeDrawerOpen',
  default: false,
})
