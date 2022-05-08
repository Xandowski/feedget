import { Check } from "phosphor-react"
import { Header } from "../../WidgetHeader"

interface FeedbackSuccesStepProps {
  onFeedbackRestartRequest: () => void,
}

export const FeedbackSuccesStep = ({onFeedbackRestartRequest}: FeedbackSuccesStepProps) => {
  return (
    <>
      <Header/>

      <div className="flex flex-col justify-center items-center py-10 w-[304px]">
        <div className="bg-brand-check w-6 h-6 rounded-md text-light-surface-primary">
          <Check weight="bold" className="h-6 w-6"/>
        </div>
        <p className="text-xl mt-2 mb-6 text-light-surface-text-primary dark:text-dark-surface-text-primary">Agradecemos o feedback!</p>
        <button
          type="button"
          onClick={onFeedbackRestartRequest}
          className="rounded-md text-light-surface-text-primary dark:text-dark-surface-text-primary bg-light-surface-secondary-main hover:bg-light-surface-secondary-hover dark:bg-dark-surface-secondary-main dark:hover:bg-dark-surface-secondary-hover py-2 px-6 text-sm leading-6 border-transparent transition-colors
        focus:border-brand-surface focus:ring-brand-surface focus:ring-1 resize-none
        focus:outline-none scrollbar-thumb-surface-stroke scrollbar-track-transparent scrollbar-thin dark:scrollbar-thumb-[#52525B]">Quero enviar outro</button>
      </div>
    </>
  )}