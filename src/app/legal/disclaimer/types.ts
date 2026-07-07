export type DisclaimerList = {
  intro?: string
  items: string[]
}

export type DisclaimerSection = {
  title: string
  paragraphs?: string[]
  strongParagraphs?: string[]
  lists?: DisclaimerList[]
}

export type DisclaimerPageContent = {
  backLink: string
  title: string
  subtitle: string
  lastUpdated: string
  headerNotice?: string
  sections: DisclaimerSection[]
  contactLinkText: string
  backFooter: string
}
