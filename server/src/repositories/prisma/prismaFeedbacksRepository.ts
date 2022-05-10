import { prisma } from "../../prisma"
import { FeedbackData, FeedbackRepository, FeedbackUpdateVotesData, GetFeedbackVotesData } from "../feedbacksRepository"

export class PrismaFeedbackRepository implements FeedbackRepository {
  async create({type, comment, screenshot, username, profilepic, amount, voters}: FeedbackData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
        username,
        profilepic,
        amount,
        voters
        }
    })
  }

  async read() {
    const feedbacks = await prisma.feedback.findMany()

    return feedbacks
  }

  async readVotes({id}: GetFeedbackVotesData) {
    const feedbackVotes = await prisma.feedback.findUnique({
      where: {
        id
      },
      select: {
        amount: true
      }
    })

    return feedbackVotes
  }

  async update({id, email}: FeedbackUpdateVotesData) {
    const emailsVoter = await prisma.feedback.findUnique({
      where: {
        id
      },
      select: {
        voters: true
      }
    })

    if (emailsVoter?.voters != null) {
      const emailVoter = emailsVoter.voters.filter((e) => {
        return e == email
      })

      if (emailVoter) {
        await prisma.feedback.update({
          where: {
            id
          },
          data: {
            amount: {
              increment: 1
            },
            voters: {
              push: email
            }
          }
        })
      }
    }
  }
}