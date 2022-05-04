import { ArrowLeft } from 'phosphor-react'

interface BackButtonProps {
  onFeedbackRestartRequest: () => void
}

export const BackButton = ({onFeedbackRestartRequest}:BackButtonProps) => {
  return (
    <button
      onClick={onFeedbackRestartRequest}
    >
      <ArrowLeft className="
        absolute top-5 left-5
        text-light-surface-text-secondary hover:text-light-surface-text-primary
        dark:text-dark-surface-text-secondary dark:hover:text-dark-surface-text-primary
      "/>
    </button>
  )
}