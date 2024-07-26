import { ReactElement } from "react"

export type NavLinkType = {
  id: string,
  href: string,
  text: string
}

export type SkillsType = {
  id: string,
  title: string,
  icon: ReactElement,
  text: string
}
