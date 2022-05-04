import { Popover } from '@headlessui/react'
import { X } from 'phosphor-react'

export const CloseButton = () => {
  return (
    <Popover.Button className="absolute top-5 right-5" title='Fechar formulário'>
      <X weight='bold' className="text-light-surface-text-secondary hover:text-light-surface-text-primary
        dark:text-dark-surface-text-secondary
        dark:hover:text-dark-surface-text-primary
        w-4 h-4
      "/>
    </Popover.Button>
  )
}