import { Feedback } from "@prisma/client"
export interface FeedbackData {
  type: string
  comment: string
  screenshot?: string
  username: string
  profilepic?: string
  amount: number
  voters: string[]
}

export interface FeedbackUpdateVotesData {
  id: string
  email: string
}

export interface FeedbackRepository {
  create: (data: FeedbackData) => Promise<void>
  read: () => Promise<Feedback[]>
  update: (data: FeedbackUpdateVotesData) => Promise<void>
}