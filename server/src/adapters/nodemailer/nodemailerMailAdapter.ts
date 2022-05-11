import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mailAdapter"

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f8bef428e6e449",
    pass: "2aab3173d48ade"
  }
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Alexandre Morais <alexandremorais.prog@gmail.com>',
      subject,
      html: body,
    }) 
  }
}