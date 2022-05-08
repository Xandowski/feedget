import { FeedbackRepository } from "../repositories/feedbacksRepository"

interface GetFeedbacksUseCaseRequest {
  type: string,
  comment: string,
  screenshot?: string
}

export class GetFeedbacksUseCase {
  constructor(
    private feedbacksRepository: FeedbackRepository
  ) {}

  async execute() {

    return await this.feedbacksRepository.read()
  }
}