import { prisma } from "../../prisma"
import { FeedbackData, FeedbackRepository } from "../feedbacksRepository"

export class PrismaFeedbackRepository implements FeedbackRepository {
  async create({type, comment, screenshot, username, profilepic}: FeedbackData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
        username,
        profilepic
      }
    })
  }

  async read() {
    const feedbacks = await prisma.feedback.findMany()

    return feedbacks
  }
}