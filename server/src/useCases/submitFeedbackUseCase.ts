import { MailAdapter } from "../adapters/mailAdapter"
import { FeedbackRepository } from "../repositories/feedbacksRepository"

interface SubmitFeedbackUseCaseRequest {
  type: string,
  comment: string,
  screenshot?: string,
  username: string,
  profilepic?: string
  amount: number
  voters: string[]
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbackRepository,
    private mailAdapter: MailAdapter
  ) {}

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot, username, profilepic, amount, voters } = request

    if (!type) {
      throw new Error('type is required.')
    }

    if (!comment) {
      throw new Error('Comment is required.')
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format.')
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
      username,
      profilepic,
      amount,
      voters
    })

    await this.mailAdapter.sendMail({
      subject: 'Novo feedback',
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentario: ${comment}</p>`,
        `<span>Por: <img src=${profilepic} style="width: 40px; height: 40px border-radius: 50%"/> ${username}</span>`,
        screenshot ? `<img src="${screenshot}" />` : ``,
        `</div>`
      ].join('\n')
    })
  }
}