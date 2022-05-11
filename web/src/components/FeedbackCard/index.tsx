import { Dialog, Transition } from "@headlessui/react"
import { CaretUp, User } from "phosphor-react"
import { FormEvent, Fragment, useEffect, useState } from "react"
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

type FeedbackVotesTypes = {
  amount: number
}

export const FeedbackCard = ({
  id, type, comment, profilePic, screenshot, username, amount, email
}:FeedbackCardProps) => {
  const feedbackType = feedbackTypes[type]
  const [amountVotes, setAmountVotes] = useState<number>(amount)
  const [vote, setVote] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  
  useEffect(() => {
    api.get(`/feedbacks/${id}/votes`)
      .then(res => {
        setAmountVotes(res.data.amount)
      })
    
  }, [vote])

  const handleSubmitVoteFeedback = async (event: FormEvent) => {
    event.preventDefault()
    setVote(true)
    
    await api.put(`/feedback/${id}`, {
      email
    })
    
    setVote(false)
  }

  return (
    <div className="bg-light-surface-secondary-main dark:bg-dark-surface-primary w-86 h-80 rounded-lg flex flex-col items-center justify-between py-4 px-6 hover:translate-x-1 hover:translate-y-1 transition-transform hover:shadow-lgl dark:hover:shadow-lgd">
      <span className="text-xl leading-6 flex items-center gap-2 text-light-surface-text-primary dark:text-dark-surface-text-primary">
        <img className="h-6" src={feedbackType.image.source} alt={feedbackType.image.alt} />
        {feedbackType.title}
      </span>

      <section className="flex flex-col justify-between border-light-surface-stroke border-2 rounded-md w-full h-full
        dark:border-dark-surface-stroke p-2 max-h-32 overflow-scroll scrollbar-thumb-surface-stroke scrollbar-track-transparent scrollbar-thin">
        <span className="text-light-surface-text-primary dark:text-dark-surface-text-primary">{comment}</span>
        <br/>
        {
          screenshot && (
            <>
              <button onClick={() => setIsOpen(true)} className="rounded-md bg-brand-surface px-4 py-2 text-sm font-medium text-white hover:bg-brand-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">Ver imagem</button>

              <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>
                  <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Dialog.Panel className="w-full max-w-screen-lg transform overflow-hidden rounded-2xl bg-light-surface-primary dark:bg-dark-surface-secondary-main p-6 text-left align-middle shadow-xl transition-all">
                          <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-light-surface-text-primary dark:text-dark-surface-text-primary"
                          >
                            Feedback screenshot
                          </Dialog.Title>
                          <div className="mt-2">
                            <img src={screenshot} alt="screenshot feedback" />
                          </div>

                          <div className="mt-4">
                            <button
                              type="button"
                              className="inline-flex justify-center rounded-md border-2 border-brand-surface bg-transparent bg-blue-100 px-4 py-2 text-sm font-semibold text-brand-surface hover:bg-brand-surface hover:text-light-surface-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-hover focus-visible:ring-offset-2"
                              onClick={() => setIsOpen(false)}
                            >
                              Voltar
                            </button>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition>
            </>
          )
        }
        
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
        <form 
          className="flex flex-col items-center"
          onSubmit={handleSubmitVoteFeedback}
        >
          <button type="submit">
            <CaretUp/>
          </button>
          <span className="text-lg">{amountVotes}</span>
        </form>
      </footer>
    </div>
  )
}