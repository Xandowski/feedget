import { useAuth0 } from "@auth0/auth0-react"
import { CaretUp, User } from "phosphor-react"
import { useState } from "react"
import { api } from "../../services/api"
import { FeedbackType, feedbackTypes } from "../WidgetForm"

interface FeedbackCardProps {
  id: string
  type: FeedbackType
  comment: string
  screenshot: string
  username: string
  profilePic: string | null
  amount: number
  email: string | null
}

export const FeedbackCard = ({
  id, type, comment, profilePic, screenshot, username, amount, email
}:FeedbackCardProps) => {
  const {isAuthenticated } = useAuth0()
  const feedbackType = feedbackTypes[type]
  const [vote, setVote] = useState(amount)

  const handleVoteFeedback = async () => {
    console.log({id, email})
    await api.put(`/feedback/${id}`, {
      email
    })
  }

  return (
    <div className="bg-light-surface-secondary-main dark:bg-dark-surface-primary w-86 h-80 rounded-lg flex flex-col items-center justify-between py-4 px-6 hover:translate-x-1 hover:translate-y-1 transition-transform hover:shadow-lgl dark:hover:shadow-lgd">
      <span className="text-xl leading-6 flex items-center gap-2 text-light-surface-text-primary dark:text-dark-surface-text-primary">
        <img className="h-6" src={feedbackType.image.source} alt={feedbackType.image.alt} />
        {feedbackType.title}
      </span>

      <section className="border-light-surface-stroke border-2 rounded-md w-full h-full
        dark:border-dark-surface-stroke p-2 max-h-32 overflow-scroll scrollbar-thumb-surface-stroke scrollbar-track-transparent scrollbar-thin">
        <span className="text-light-surface-text-primary dark:text-dark-surface-text-primary">{comment}</span>
        <br/>
        <a className="text-brand-surface font-medium" href={screenshot} target="_blank">Ver imagem</a>
      </section>

      <footer className="flex justify-between items-center w-full text-light-surface-text-secondary dark:text-dark-surface-text-secondary">
        <div className="flex items-center gap-1">
          <div>
            {profilePic ? (
              <img className="w-12 h-12 rounded-full" src={profilePic} alt="foto do usuário" />
            ) : (
              <div className="w-12 h-12 rounded-full dark:border-dark-surface-text-secondary  border-light-surface-text-secondary dark:text-dark-surface-text-secondary text-light-surface-text-secondary border-2 flex items-center justify-center">
                <User className="w-8 h-8 rounded-full"/>
              </div>
            )}
            
          </div>
          <span className="text-lg">{username}</span>
        </div>
        <div className="flex flex-col items-center">
          <button type="button" onClick={handleVoteFeedback}>
            <CaretUp/>
          </button>
          <span className="text-lg">{amount}</span>
        </div>
      </footer>
    </div>
  )
}