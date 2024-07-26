import React from 'react'
import Title from './Title'
import { skills } from '../data'
import SkillsCard from './SkillsCard'

const Skills = () => {
  return (
    <section className="py-20 align-element" id="skills">
      <Title text="Tech stack" />
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills?.map((skill) => {
          const { id, title, icon, text } = skill;
          return <SkillsCard key={id} skill={skill} />
        })}
      </div>
    </section>
  )
}

export default Skills
