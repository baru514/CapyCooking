import { useTheme } from "../hooks/useTheme"
import './ThemeSelector.css'
import modeIcon from "../images/lightDarkMode.png"

export default function ThemeSelector() {
  const colorThemes = ['#58249c', '#249c6b', '#b70233']
  const{ changeColor, changeMode, mode } = useTheme();
  
  return (
    <div className="theme-wrapper">
    <div className='theme-selector'>
      <div className="mode-toggle">
        <img 
          onClick={()=>changeMode(mode === 'dark'? 'light' : 'dark')}
          style={{filter: mode === 'dark' ? 'invert(90%)' : 'invert(20%)'}}
          src={modeIcon} 
          alt="dark/light toggle icon" />
      </div>
      <div className="theme-buttons">
        {colorThemes.map((color)=>(
          <div onClick={()=>(changeColor(color))}
            style={{background: color}}
            key={color}
          />
        ))}
      </div>
    </div>
    </div>
  )
}
