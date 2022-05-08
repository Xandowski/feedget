import { Moon, Sun } from 'phosphor-react'
import { MouseEventHandler } from 'react'

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