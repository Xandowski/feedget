import { SubmitFeedbackUseCase } from "./submitFeedbackUseCase"

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const submitFeedbackUseCase = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy},
  { sendMail: sendMailSpy}
)

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(submitFeedbackUseCase.execute({
      type: 'BUG',
      comment: 'bugadoo',
      screenshot: 'data:image/png;base64,asasa.png'
    })).resolves.not.toThrow()

    expect(createFeedbackSpy).toHaveBeenCalled()
    expect(sendMailSpy).toHaveBeenCalled()
  })

  it('should not be able to submit a feedback without a type', async () => {
    await expect(submitFeedbackUseCase.execute({
      type: '',
      comment: 'bugadoo',
      screenshot: 'data:image/png;base64,asasa.png'
    })).rejects.toThrow()
  })

  it('should not be able to submit a feedback without a comment', async () => {
    await expect(submitFeedbackUseCase.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,asasa.png'
    })).rejects.toThrow()
  })

  it('should not be able to submit a feedback with aa invalid screenshot', async () => {
    await expect(submitFeedbackUseCase.execute({
      type: 'BUG',
      comment: 'comentario',
      screenshot: 'asasa.png'
    })).rejects.toThrow()
  })
})