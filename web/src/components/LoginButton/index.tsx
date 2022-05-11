import { useAuth0 } from "@auth0/auth0-react"

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return <button className="text-brand-surface cursor-pointer font-medium" onClick={() => loginWithRedirect()}>Login</button>
}
