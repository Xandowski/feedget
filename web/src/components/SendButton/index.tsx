interface SendButtonProps {
  disabled: boolean | undefined
}

export const SendButton = ({disabled}: SendButtonProps) => {
  return (
    <button
      disabled={disabled}
      type="submit" className="
      bg-brand-surface hover:bg-brand-hover p-2 h-10 w-64 flex-1 flex justify-center items-center 
      rounded-md text-light-surface-primary border-transparent text-sm
      focus:outline-none focus:ring-2 focus-ring-offset-2 focus:ring-offset-dark-surface-primary focus:ring-brand-surface transition-colors disabled:opacity-50 disabled:hover:bg-brand-surface"
    >Enviar feedback</button>
  )
}