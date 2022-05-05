import { Moon, Sun } from 'phosphor-react'
import { MouseEventHandler } from 'react'
import Logo from '../../assets/imgs/logo.svg'
import { useDarkMode } from '../../hook/useDarkMode'

type SwitchThemeButtonProps = {
  theme: string
  onClick: MouseEventHandler<SVGSVGElement>
  className: string
}

export const SwitchThemeButton = ({theme, onClick, className}: SwitchThemeButtonProps) => {

  return (
    theme === 'light' ? 
      <Sun onClick={onClick} className={className} size={26} color="white"/> : 
      <Moon onClick={onClick} className={className} size={26}/>
  )
}

export const Nav = () => {
  const [colorTheme, setTheme] = useDarkMode()
  
  const switchTheme = () => {
    setTheme(colorTheme)
    return 
  }

  return (
    <nav className="
    bg-light-surface-secondary-main dark:bg-dark-surface-secondary-main w-screen h-18
      flex justify-between items-center p-8
    ">
      <img src={Logo} alt="logo" />
      <SwitchThemeButton theme={colorTheme} onClick={switchTheme}
        className=""
      />
    </nav>
  )
}