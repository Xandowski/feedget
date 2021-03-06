import { useAuth0 } from "@auth0/auth0-react"
import { FormEvent, useEffect, useState } from "react"
import { FeedbackType, feedbackTypes } from ".."
import { api } from "../../../services/api"
import { BackButton } from "../../BackButton"
import { SendButton } from "../../SendButton"
import { Header } from "../../WidgetHeader"
import { ScreenshotButton } from "../ScreenshotButton"

interface FeedbackContentStepProps {
  feedbackTypeSelected: FeedbackType,
  onFeedbackRestartRequest: () => void,
  onFeedbackSent: () => void,
  setSubmitFeedback: React.Dispatch<React.SetStateAction<boolean>>
}

export const FeedbackContentStep = ({
  feedbackTypeSelected, onFeedbackRestartRequest, onFeedbackSent, setSubmitFeedback
}: FeedbackContentStepProps) => {
  const { user, isAuthenticated } = useAuth0()
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('')
  const [isSendingFeedback, setIsSendingFeedback] = useState(false)
  const [username, setUsername] = useState<string>('Anônimo')
  const [profilepic, setProfilepic] = useState<string | null>(null)
  const [email, setEmail] = useState<String | null>(null)

  useEffect(() =>{
    if (user?.nickname) {
      setUsername(user?.nickname)
    }

    if (user?.given_name) {
      setUsername(user?.given_name)
    }
  
    if (user?.picture) {
      setProfilepic(user.picture)
    }

    if (user?.email) {
      setEmail(user?.email)
      
    }
  }, [])
  
  const handleSubmitFeedback = async (event: FormEvent) => {
    event.preventDefault()
    
    setIsSendingFeedback(true)

    await api.post('/feedback', {
      type: feedbackTypeSelected,
      comment,
      screenshot,
      username,
      profilepic,
      email
    }
    )

    setIsSendingFeedback(false)
    onFeedbackSent()
    setSubmitFeedback(true)
  }



  const feedbackTypeInfo = feedbackTypes[feedbackTypeSelected]
  let placeholder = ''

  if(feedbackTypeInfo.title === 'Problema') {
    placeholder = 'Qual é o seu problema?'
  } else if (feedbackTypeInfo.title === 'Ideia') {
    placeholder = 'Qual é a sua ideia?'
  } else if (feedbackTypeInfo.title === 'Outro') {
    placeholder = 'Você tem alguma sugestão?'
  }

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
        onChange={event => setComment((event.target as HTMLTextAreaElement).value)}
      >
        <textarea 
          className="min-w-[250px] w-full min-h-[112px] text-sm border-light-surface-stroke rounded-md
          dark:border-dark-surface-stroke
          focus:border-brand-surface
          focus:ring-brand-surface
          focus:ring-1 resize-none
          focus:outline-none scrollbar-thumb-surface-stroke scrollbar-track-transparent scrollbar-thin dark:scrollbar-thumb-[#52525B]"
          placeholder={placeholder}
        />

        <footer className="flex gap-2 justify-between items-center">
          <ScreenshotButton 
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <SendButton 
            disabled={comment.length === 0 || isSendingFeedback}
            loading={isSendingFeedback}
          />
        </footer>
      </form>
    </>
  )}