import { FeedbackType, feedbackTypes } from ".."
import { Header } from "../../WidgetHeader"

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void
}

export const FeedbackTypeStep = ({onFeedbackTypeChanged}: FeedbackTypeStepProps) => {
  return(
    <>
      <Header>
        <span className="text-xl leading-6">
          Deixe seu feedback
        </span>
      </Header>
      <section className="flex gap-2 py-8 w-full">
        { Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button 
              key={key}
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              className="bg-light-surface-secondary-main
              dark:bg-dark-surface-secondary-main
              dark:text-dark-surface-text-primary
              flex flex-col items-center justify-center w-24 h-28 rounded-lg
              hover:border-brand-surface border-2 border-transparent py-5 flex-1 gap-2
              focus:border-brand-surface focus:ouline-none
            ">
              <img className='h-9' src={value.image.source} alt={value.image.alt}/>
              <span>{value.title}</span>
            </button>
          )
        }) }
      </section>
    </>
    
  )}