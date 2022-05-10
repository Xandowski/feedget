import { FeedbackRepository } from "../repositories/feedbacksRepository"

interface GetFeedbackVotesUseCaseRequest {
  id: string
}

export class GetFeedbackVotesUseCase {
  constructor(
    private feedbacksRepository: FeedbackRepository
  ) {}

  async execute(request: GetFeedbackVotesUseCaseRequest) {
    const { id  } = request
    
    return await this.feedbacksRepository.readVotes({ id })
  }
}