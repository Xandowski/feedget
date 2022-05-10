import BodyParser from 'body-parser'
import cors from 'cors'
import express, { json } from "express"
import { routes } from './routes'

export const app = express()

app.use(cors({
  origin: true
}))
app.use(json({limit: '50mb'}))
app.use(BodyParser.urlencoded({limit: '50mb', extended: true }))
app.use((req, res, next) => {
  res.header('Acess-control-Allow-Origin', 'https://feedget-xandowski.vercel.app')
  res.header('Acess-control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')

  if (req.method === 'OPTIONS') {
    res.header('Acess-control-Allow-Headers', 'GET, POST, PUT, PATCH, DELETE')
    return res.status(200).json({})
  }
  next()
})
app.use(routes)

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP server running!')
})