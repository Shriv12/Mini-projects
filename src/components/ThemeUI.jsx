import { useContext } from 'react'
import {ThemeContext} from '../context/ThemeSwitchContext.jsx'

function ThemeUI() {
    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div style={{backgroundColor: theme=== 'light' ? '#fff': '#000'}}>
        <h1 style={{ color: theme=== 'light' ? '#000': '#fff'}}>
            this is theme contect api
        </h1>
        <button onClick={toggleTheme} style={{backgroundColor: theme=== 'light' ? '#000': '#fff', color: theme=== 'light' ? '#fff': '#000'}}>
            Toggle button
        </button>
    </div>
  )
}

export default ThemeUI