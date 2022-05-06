import { Router } from "express"
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailerMailAdapter"
import { PrismaFeedbackRepository } from "./repositories/prisma/prismaFeedbacksRepository"
import { SubmitFeedbackUseCase } from "./useCases/submitFeedbackUseCase"

export const routes = Router()

routes.post('/feedback', async (req, res) => {
  const { type, comment, screenshot } = req.body

 try {
  const prismaFeedbackRepository = new PrismaFeedbackRepository()
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
 } catch (err) {
   console.log(err)
  return res.sendStatus(201).send()
 }
})
