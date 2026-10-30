import ThemeUI from './ThemeUI'
import {ThemeProvider} from '../context/ThemeSwitchContext.jsx'
function ThemeSwitcher() {
  return (
    <ThemeProvider>
        <ThemeUI/>
    </ThemeProvider>
  )
}

export default ThemeSwitcher