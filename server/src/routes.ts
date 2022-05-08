import { Router } from "express"
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailerMailAdapter"
import { PrismaFeedbackRepository } from "./repositories/prisma/prismaFeedbacksRepository"
import { GetFeedbacksUseCase } from "./useCases/getFeedbacksUseCase"
import { SubmitFeedbackUseCase } from "./useCases/submitFeedbackUseCase"

export const routes = Router()

const prismaFeedbackRepository = new PrismaFeedbackRepository()

routes.get('/feedbacks', async (req, res) => {
  const getFeedbacksUseCase = new GetFeedbacksUseCase(
    prismaFeedbackRepository
  )

  const feedbacks = await getFeedbacksUseCase.execute()

  return res.sendStatus(200).send().json()
})

routes.post('/feedback', async (req, res) => {
  const { type, comment, screenshot } = req.body

  const nodemailerMailAdapter = new NodemailerMailAdapter()

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbackRepository,
    nodemailerMailAdapter
  )

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  })

  return res.sendStatus(201).send()
})
