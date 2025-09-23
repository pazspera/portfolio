// Takeaway item
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

// ChallengeItem
export type Desafio = {
  id: number,
  text: string,
}

export type ItemEnfoque = {
  id: number,
  title: string,
  text: string,
}

export type ItemImpacto = {
  id: number,
  title: string,
  text: string,
}