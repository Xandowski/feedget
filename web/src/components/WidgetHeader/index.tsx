import { CloseButton } from '../CloseButton'

interface HeaderProps {
  children?: JSX.Element[] | JSX.Element
}

export const Header = ({children}: HeaderProps) => {
  return (
    <header className="flex justify-center items-center text-light-surface-text-primary dark:text-dark-surface-text-primary">
      {children}

      <CloseButton/>
    </header>
  )
}