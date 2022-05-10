import BodyParser from 'body-parser'
import cors from 'cors'
import express, { json } from "express"
import { routes } from './routes'

export const app = express()

app.use(cors())
app.options('*', cors)
app.use(json({limit: '50mb'}))
app.use(BodyParser.urlencoded({limit: '50mb', extended: true }))
app.use(routes)

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP server running!')
})