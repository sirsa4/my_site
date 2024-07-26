import React from 'react'
import { Github } from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'
import { FaHtml5 } from "react-icons/fa"

const Hero = () => {
  return (
    <section className="bg-primary-light py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I am Yahye</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Front-end developer
          </p>
          <div className="flex gap-x-4 mt-4">
            <Link href={`https://github.com/sirsa4`} target='_blank' >
              <Github className="h-8 w-8" color='red' />
            </Link>
          </div>
        </article>
        <article className="hidden md:block">
          <Image src="/assets/undraw_programmer.svg" alt='hero image' width={200} height={320} className="lg:h-96" />
        </article>
      </div>
    </section >
  )
}

export default Hero
