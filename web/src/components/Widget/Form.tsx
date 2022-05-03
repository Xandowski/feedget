import { Popover } from '@headlessui/react'
import { useState } from 'react'
import bugImageUrl from '../../assets/imgs/bug.svg'
import ideaImageUrl from '../../assets/imgs/idea.svg'
import thoughtImageUrl from '../../assets/imgs/thought.svg'
import { CloseButton } from "../CloseButton"

const feedbackTypes = {
  BUG : {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      al: 'Imagem de um inset'
    }
  },
  IDEA : {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      al: 'Imagem de uma lâmpada'
    }
  },
  THOUGHT : {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      al: 'Imagem de uma nuvem'
    }
  }
}

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<string>('')

  return (
    <div className="dark:bg-dark-surface-primary mb-4 p-4 rounded-2xl flex flex-col items-center shadow-xl w-[calc(100vw-2rem)] md:w-auto">
      <header className="flex justify-center items-center">
        <span className="text-xl leading-6 dark:text-dark-surface-text-primary">Deixe seu feedback</span>
        <CloseButton/>
      </header>
      <section className="flex gap-2 py-8 w-full">
        {
          Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <Popover.Button 
                key={key}
                onClick={() => setFeedbackType(key)}
                className="bg-light-surface-secondary-main
                dark:bg-dark-surface-secondary-main
                dark:text-dark-surface-text-primary
                flex flex-col items-center justify-center w-24 h-28 rounded-lg
                hover:border-brand-surface border-2 border-transparent py-5 flex-1 gap-2
                focus:border-brand-surface focus:ouline-none
              ">
                <img className='h-9' src={value.image.source}/>
                <span>{value.title}</span>
              </Popover.Button>
            )
          })
        }
      </section>

      <footer className="text-xs flex justify-center dark:text-dark-surface-text-secondary">
       Feito com ♥ pela Rocketseat
    </footer>
    </div>
  )
}