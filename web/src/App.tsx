import { Auth0Provider } from "@auth0/auth0-react"
import { Index } from "./pages"

export const App = () =>{
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      redirectUri={import.meta.env.VITE_REDIRECT_URL}
    >
      <Index/>
    </Auth0Provider>
  )
}

