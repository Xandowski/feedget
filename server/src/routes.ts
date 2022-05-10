import { Router } from "express"
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailerMailAdapter"
import { PrismaFeedbackRepository } from "./repositories/prisma/prismaFeedbacksRepository"
import { GetFeedbacksUseCase } from "./useCases/getFeedbacksUseCase"
import { SubmitFeedbackUseCase } from "./useCases/submitFeedbackUseCase"
import { UpdateFeedbackVotesUseCase } from "./useCases/updateFeedbackVotesUseCase"

export const routes = Router()

const prismaFeedbackRepository = new PrismaFeedbackRepository()

routes.get('/feedbacks', async (req, res) => {
  const getFeedbacksUseCase = new GetFeedbacksUseCase(
    prismaFeedbackRepository
  )

  const feedbacks = await getFeedbacksUseCase.execute()

  return res.send(feedbacks)
})

routes.put('/feedback/:id', async (req, res) => {
  const id = req.params.id
  const { email } = req.body
  
  const updateFeedbackVotesUseCase = new UpdateFeedbackVotesUseCase(
    prismaFeedbackRepository
  )

  await updateFeedbackVotesUseCase.execute({
    id,
    email
  })
})

routes.post('/feedback', async (req, res) => {
  const { type, comment, screenshot, username, profilepic, email } = req.body

  const nodemailerMailAdapter = new NodemailerMailAdapter()

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbackRepository,
    nodemailerMailAdapter
  )

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
    username,
    profilepic,
    amount: 0,
    voters: [email]
  })

  return res.sendStatus(201).send()
})
