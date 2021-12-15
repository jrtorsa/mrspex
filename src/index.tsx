import ReactDOM from 'react-dom'
import ContextGlobal from './context/ContextGlobal'
import { useState, StrictMode } from 'react'
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom'
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core'
import { AccessAlarm as Clock, Build as BuildIcon } from '@material-ui/icons'

// Pages
import PageHome from './pages/PageHome'
import ConfigPage from './pages/ConfigPage'
import PageError404 from './pages/PageError404'

function Layout(): JSX.Element {
  const [value, setValue] = useState(
    window.location.pathname === '/'
      ? 0
      : window.location.pathname === '/custom'
      ? 1
      : 2
  )

  return (
    <section>
      <Box sx={{ width: '100%' }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_, newValue: number) => {
            setValue(newValue)
          }}
        >
          <BottomNavigationAction
            component={Link}
            to="/"
            label="Time Range Verifier"
            icon={<Clock />}
          />
          <BottomNavigationAction
            component={Link}
            to="/config"
            label="Config Time Ranges"
            icon={<BuildIcon />}
          />
        </BottomNavigation>
      </Box>
      <Outlet />
    </section>
  )
}

ReactDOM.render(
  <StrictMode>
    <ContextGlobal>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PageHome />} />
            <Route path="config" element={<ConfigPage />} />
            <Route path="*" element={<PageError404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextGlobal>
  </StrictMode>,
  document.getElementById('root')
)
