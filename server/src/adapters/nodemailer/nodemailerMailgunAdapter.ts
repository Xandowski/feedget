import nodemailer from 'nodemailer'
import mg from 'nodemailer-mailgun-transport'
import { MailAdapter, SendMailData } from "../mailAdapter"

const mailgunAuth = {
  auth: {
    api_key: "9549294b1188ccd90b6e766798d6f8e3-100b5c8d-c56e9a6e",
    domain: "sandbox2f1f4252768a4b3cb3ae1e48e23fc058.mailgun.org"
  }
}

const transport = nodemailer.createTransport(mg(mailgunAuth))

export class NodemailerMailgunAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <alexandremorais.prog@gmail.com>',
      to: 'Alexandre Morais <alexandremorais.prog@gmail.com>',
      subject,
      html: body,
    }) 
  }
}