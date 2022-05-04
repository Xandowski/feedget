import html2canvas from "html2canvas"
import { Camera, Trash } from "phosphor-react"
import { useState } from "react"
import { Loading } from "../Loading"

interface ScreenshotByttonProps {
  screenshot: string | null
  onScreenshotTook: (screenshot: string | null) => void
}

export const ScreenshotButton = ({screenshot, onScreenshotTook}: ScreenshotByttonProps) => {
  const [isTakingScreenshot, setIstakingScreenshot] = useState(false)
  
  const handleTakeScreenshoot = async () => {
    setIstakingScreenshot(true)

    const canvas = await html2canvas(document.querySelector('html')!)
    const base64image = canvas.toDataURL('image/png')
    
    onScreenshotTook(base64image)
    setIstakingScreenshot(false)
  }

  if (screenshot) {
    return (
      <button type="button" className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-light-surface-text-secondary hover:text-light-surface-text-primary dark:text-dark-surface-text-secondary dark:hover:text-dark-surface-text-primary transition-colors"
      onClick={() => onScreenshotTook(null)}
      style={{
        backgroundImage: `url(${screenshot})`,
        backgroundPosition: 'right bottom',
        backgroundSize: 180
      }}
      >
        <Trash weight="fill"/>
      </button>
    )
  }

  return (
    <button 
      type="button"
      onClick={handleTakeScreenshoot}
      className="p-2 flex rounded-md border-transparent items-center      justify-center w-10 h-10 bg-light-surface-secondary-main text-light-surface-text-primary hover:bg-light-surface-secondary-hover dark:bg-dark-surface-secondary-main dark:hover:bg-dark-surface-secondary-hover dark:text-dark-surface-text-primary transition-colors
    focus:outline-none focus:ring-2 focus-ring-offset-2 focus:ring-offset-dark-surface-primary focus:ring-brand-surface hover:cursor-pointer"
    >
      { isTakingScreenshot ? <Loading/> : <Camera className="h-6 w-6"/>}
    </button>
  )
}