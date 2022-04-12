import { createRoot } from 'react-dom/client'
import { Recoil, Theme, Styles, Routes } from 'providers'

createRoot(document.getElementById('root')).render(
  <Recoil>
    <Theme>
      <Styles />
      <Routes />
    </Theme>
  </Recoil>,
)
