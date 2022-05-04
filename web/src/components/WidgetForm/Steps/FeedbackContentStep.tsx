import { FormEvent, useState } from "react"
import { FeedbackType, feedbackTypes } from ".."
import { BackButton } from "../../BackButton"
import { Header } from "../../Header"
import { SendButton } from "../../SendButton"
import { ScreenshotButton } from "../ScreenshotButton"

interface FeedbackContentStepProps {
  feedbackTypeSelected: FeedbackType,
  onFeedbackRestartRequest: () => void,
  onFeedbackSent: () => void
}

export const FeedbackContentStep = ({
  feedbackTypeSelected, onFeedbackRestartRequest, onFeedbackSent
}: FeedbackContentStepProps) => {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('')

  const handleSubmitFeedback = (event: FormEvent) => {
    event.preventDefault()
    console.log({
      screenshot,
      comment
    })

    onFeedbackSent()
  }

  const feedbackTypeInfo = feedbackTypes[feedbackTypeSelected]
  return (
    <>
      <Header>
        {<>
          <BackButton onFeedbackRestartRequest={onFeedbackRestartRequest}/>
          {
            <span className="text-xl leading-6 flex items-center gap-2">
              <img className="h-6" src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} />
              {feedbackTypeInfo.title}
            </span>
          }
        </>}
      </Header>
      <form
        onSubmit={handleSubmitFeedback} 
        className="flex flex-col gap-2 py-8 w-full"
        onChange={event => setComment(event.target.value)}
      >
        <textarea 
          className="min-w-[250px] w-full min-h-[112px] text-sm border-light-surface-stroke rounded-md
          dark:border-dark-surface-stroke
          focus:border-brand-surface
          focus:ring-brand-surface
          focus:ring-1 resize-none
          focus:outline-none scrollbar-thumb-surface-stroke scrollbar-track-transparent scrollbar-thin dark:scrollbar-thumb-[#52525B]"
          placeholder="Qual o problema?"
        />

        <footer className="flex gap-2 justify-between items-center">
          <ScreenshotButton 
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <SendButton disabled={comment.length === 0}/>
        </footer>
      </form>
    </>
  )}