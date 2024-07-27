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

export type ProjectType = {
  id: string,
  img: string,
  url: string,
  github: string,
  title: string,
  text: string
}
