export type Conclusion = {
  id: number,
  img: {
    src: string,
    alt: string,
  },
  title: string,
  text: string,
  class?: string,
}

export type Resumen = {
  summary: string,
  roleCard: {
    role: string,
    client: string,
    duration: string,
  }
}