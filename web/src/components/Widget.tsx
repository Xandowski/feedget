import { Popover } from '@headlessui/react'
import { ChatTeardropDots } from "phosphor-react"

export const Widget = () => {
  return (
    <Popover className="absolute bottom-5 right-5">
      <Popover.Panel>Hello</Popover.Panel>
      
      <Popover.Button className="
        bg-brand-500 rounded-full h-12 px-3
        flex justify-evenly items-center text-white
        hover:bg-[#996DFF] group
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