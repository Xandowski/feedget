import { FeedbackRepository } from "../repositories/feedbacksRepository"

interface UpdateFeedbackVotesUseCaseRequest {
  id: string
  email: string
}

export class UpdateFeedbackVotesUseCase {
  constructor(
    private feedbacksRepository: FeedbackRepository
  ) {}

  async execute(request: UpdateFeedbackVotesUseCaseRequest) {
    const { id, email } = request
    
    return await this.feedbacksRepository.update({id, email})
  }
}