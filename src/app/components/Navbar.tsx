import React from 'react'
import { links } from '../data'
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-primary-light">
      <div className="mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          Web<span className="text-secondary-dark">Dev</span>
        </h2>
        <ul className="flex gap-x-3">
          {links?.map((link) => {
            const { id, href, text } = link;
            return <Link key={id} href={href} className="capitalize text-lg tracking-wide hover:text-secondary-dark duration-300">{text}</Link>
          })}
        </ul>
      </div>
    </nav>)
}

export default Navbar
