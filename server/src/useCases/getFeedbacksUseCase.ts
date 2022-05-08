import { FeedbackRepository } from "../repositories/feedbacksRepository"

export class GetFeedbacksUseCase {
  constructor(
    private feedbacksRepository: FeedbackRepository
  ) {}

  async execute() {

    return await this.feedbacksRepository.read()
  }
}