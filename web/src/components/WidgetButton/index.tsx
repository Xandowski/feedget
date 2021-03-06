import { Popover } from '@headlessui/react'
import { ChatTeardropDots } from "phosphor-react"
import { WidgetForm } from '../WidgetForm'

interface WidgetButtonProps {
  setSubmitFeedback: React.Dispatch<React.SetStateAction<boolean>>
}

export const WidgetButton = ({setSubmitFeedback}: WidgetButtonProps) => {
  return (
    <Popover className="fixed bottom-4 right-4 flex flex-col items-end md:bottom-8 md:right-8">
      <Popover.Panel >
        <WidgetForm setSubmitFeedback={setSubmitFeedback}/>
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