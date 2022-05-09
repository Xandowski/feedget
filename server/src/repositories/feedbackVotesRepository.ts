import { Feedback } from "@prisma/client"

export interface FeedbackVotesData {
  amout: Number,
  voters:   String[]
  Feedback: Feedback[]
}


export interface FeedbackVotesRepository {
  create: (data: FeedbackVotesData) => Promise<void>
  read: () => Promise<Feedback[]>
}