import React from 'react'
import Title from './Title'
import Image from 'next/image'

const About = () => {

  return (
    <section className="bg-primary py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <Image
          src="/assets/about.svg"
          alt="image of a person"
          width={300} // Replace with your desired width
          height={300} // Replace with your desired height
          className="w-full h-80" // Optional, keep if needed
        />
        <article>
          <Title text="About me" />
          <p className="text-slate-600 mt-8 leading-loose">
            I am a master's student in cybersecurity at Østfold University College, with a bachelor's degree in information systems. My main interests are everything in web development including React and Node.js.
          </p>
        </article>
      </div>
    </section>
  )
}

export default About
