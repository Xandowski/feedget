import { Feedback } from "@prisma/client"

export interface FeedbackData {
  type: string,
  comment: string,
  screenshot?: string
  username: string
  profilepic?: string
}


export interface FeedbackRepository {
  create: (data: FeedbackData) => Promise<void>
  read: () => Promise<Feedback[]>
}