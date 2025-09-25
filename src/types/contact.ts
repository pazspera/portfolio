export interface ErrorMessage {
  content?: string,
  html?: boolean
}

export interface ContactForm {
  name: string,
  email: string,
  message: string,
  date: string
}