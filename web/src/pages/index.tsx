import { useAuth0 } from "@auth0/auth0-react"
import { useEffect, useState } from "react"
import { FeedbackCard } from "../components/FeedbackCard"
import { FeedbackCardLoading } from "../components/FeedbackCard/FeedbackCardLoading"
import { Nav } from "../components/Nav"
import { SwitchThemeButton } from "../components/SwitchThemeButton"
import { WidgetButton } from "../components/WidgetButton"
import { FeedbackType } from "../components/WidgetForm"
import { useDarkMode } from "../hook/useDarkMode"
import { api } from "../services/api"

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return <button onClick={() => loginWithRedirect()}>Login</button>;
}

export default LoginButton

type FeedbackTypeProps = {
  id: string
  type: FeedbackType
  comment: string
  screenshot: string
  username: string
  profilepic: string | null
  amount: number
  voters: string[]
  email: string
}

export const Index = () =>{
  const { user, isAuthenticated, isLoading } = useAuth0()
  const [feedbacks, setFeedbacks] = useState<FeedbackTypeProps[] | null>(null)
  const [colorTheme, setTheme] = useDarkMode()
  const email = user?.email ? user?.email : null
  const [submitFeedback, setSubmitFeedback] = useState(false)
  
  const switchTheme = () => {
    setTheme(colorTheme)
    return 
  }
  useEffect(() => {
    if (isAuthenticated) {
      api.get('/feedbacks', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'X-Requested-With',
        }
      })
        .then(res => {
          setFeedbacks(res.data)
        })
    }
    
  }, [isAuthenticated, submitFeedback])
  
  return (
    <>
      <Nav/>
      <section className="flex flex-col items-center mt-12  w-full min-h-[calc(100vh-7.5rem)]">
        {isAuthenticated ? (
          <>
            <span className="text-light-surface-text-secondary dark:text-dark-surface-text-secondary font-medium">Bem vindo {user?.nickname || user?.given_name}. </span>
            <h1 className="font-medium text-lg px-2 sm:px-0 sm:text-2xl text-light-surface-text-secondary dark:text-dark-surface-text-secondary">Experimente enviar um feedback de um bug na aplicação.</h1>
          </>
        ) : (
          <h1 className="font-medium text-2xl text-light-surface-text-secondary dark:text-dark-surface-text-secondary">Faça <span className="text-brand-surface cursor-pointer"><LoginButton/></span> para visualizar os feedbacks cadastrados.</h1>
        )}

        <div className="mt-8 mb-20 max-w-[1072px] h-full flex flex-wrap gap-8">
          {isLoading ? (
            <>
              <FeedbackCardLoading/>
              <FeedbackCardLoading/>
              <FeedbackCardLoading/>
            </>
          ) : feedbacks && feedbacks.length > 0 ? (
            feedbacks.map((feedback, index) => {
            
              return <FeedbackCard 
                        key={index}
                        type={feedback.type}
                        comment={feedback.comment}
                        screenshot={feedback.screenshot}
                        profilePic={feedback.profilepic}
                        username={feedback.username}
                        amount={feedback.amount}
                        id={feedback.id}
                        email={email}
                      />
            })
          ) : isAuthenticated && (<h1 className="font-medium text-1xl text-light-surface-tooltip">Seja o primeiro a cadastrar um feedback.</h1>)}
        </div>
      </section>
      <SwitchThemeButton theme={colorTheme} onClick={switchTheme}
        className="cursor-pointer absolute top-5 right-10"
      />
      <WidgetButton setSubmitFeedback={setSubmitFeedback}/>
    </>
  )
}



