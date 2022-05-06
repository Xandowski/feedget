import cors from 'cors'
import express, { json } from "express"
import { routes } from './routes'

export const app = express()

app.use(cors())
app.use(json())
app.use(routes)

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP server running!')
})