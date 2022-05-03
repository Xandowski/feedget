import { Popover } from '@headlessui/react'
import { ChatTeardropDots } from "phosphor-react"
import { WidgetForm } from './Form'

export const Widget = () => {
  return (
    <Popover className="absolute bottom-4 right-4 flex flex-col items-end md:bottom-8 md:right-8">
      <Popover.Panel className="dark:bg-dark-surface-primary">
        <WidgetForm/>
      </Popover.Panel>
    
      <Popover.Button className="
        bg-brand-surface rounded-full h-12 px-3
        flex justify-evenly items-center text-light-surface-text-onToolTip
        
        max-w-lg
        hover:bg-brand-hover group
      "
      >
        <ChatTeardropDots size={24}/>
        <span className="
          max-w-0 overflow-hidden group-hover:max-w-xs
          transition-all duration-500 ease-linear
        ">
          <span className="pl-2">
          </span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
    
  )
}