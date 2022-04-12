import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard } from 'components'

export default () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
)
