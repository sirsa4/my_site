
"use client"
import { ProjectType } from '@/app/utils/type'
import { FaGithubSquare } from "react-icons/fa"
import DialogTitle from './DialogTitle'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'
const Dialog = ({ img, url, title, text, body, github, dialogRef, close, slide, id }: ProjectType) => {
  const [src, setSrc] = useState<null | string>(slide ? slide[0] : null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => {
    setCurrentIndex((prevIndex) => {
      let newIndex = (prevIndex + 1) % slide?.length;
      setSrc(slide ? slide[newIndex] : null);
      return newIndex;
    })
  }
  const prev = () => {
    setCurrentIndex((previousIndex) => {
      let prevIndex = (previousIndex - 1 + slide?.length) % slide?.length;
      setSrc(slide ? slide[prevIndex] : null);
      return prevIndex;
    })
  }
  return (
    <dialog ref={dialogRef} className="w-full">
      <article className="bg-primary-white rounded-lg shadow-md hover:shadow-2xl duration-300">
        <DialogTitle close={close} />
        <div className="p-4 border-b grid lg:grid-cols-2">
          <div className="capitalize p-8">
            <h2 className="text-4xl lg:text-6xl tracking-wide font-medium">{title}</h2>
            <p className="mt-4 text-slate-700 leading-loose">{body ? body : text}</p>
          </div>
          <img src={img} alt={title} className="w-full object-cover rounded-t-lg h-64" />
        </div>
        <section className="p-4 w-full">
          <p>slide: {slide ? src : "no slide images"}</p>
          <img src={src} alt="slide image" className="rounded" />
          <div className="py-4 flex justify-center gap-x-10">
            <ArrowLeft onClick={prev} className="cursor-pointer" />
            <ArrowRight onClick={next} className="cursor-pointer" />
          </div>
          <div className="mt-4">
            <button
              type="button"
              className="bg-primary-dark text-primary-white hover:bg-accent font-semibold py-2 px-4 rounded transition duration-300 hidden md:block"
              onClick={close}
            >
              Close
            </button>
          </div>
        </section>

      </article>
    </dialog>
  )
}

export default Dialog;
