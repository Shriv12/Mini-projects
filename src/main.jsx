import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Tictactoe from './components/Tictactoe.jsx'
import OtpLoginHome from './components/OtpLoginHome.jsx'
import ThemeSwitcher from './components/ThemeSwitcher.jsx'
import RealWorkScenario from './components/RealWorkScenario.jsx'
import CssStyles from './components/CssStyles.jsx'
import AdvancedCss from './components/AdvancedCss.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/tic-tac-toe',
    element: <Tictactoe/>
  },
  {
    path: '/otp-login',
    element: <OtpLoginHome/>
  },
  {
    path: '/theme-switcher',
    element: <ThemeSwitcher />
  },
  {
    path: '/real-work-scenarios',
    element: <RealWorkScenario />
  },
  {
    path: '/css-styles',
    element: <CssStyles />,
    children: [
      {
        path: 'advanced-css',
        element: <AdvancedCss/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    <App />
    </RouterProvider>
  </StrictMode>,
)
