import React from 'react'
import { SkillsType } from '../utils/type'

const SkillsCard = ({ skill }: { skill: SkillsType }) => {
  const { title, icon, text } = skill;
  return (
    <article className="shadow-sm md:p-4 bg-primary rounded">
      <span>{icon}</span>
      <h4 className="mt-6 font-bold">{title}</h4>
      <p className="mt-2 text-slate-500">{text}</p>
    </article>
  )
}

export default SkillsCard
