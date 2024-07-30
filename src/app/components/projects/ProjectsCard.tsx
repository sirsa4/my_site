"use client"
import { ProjectType } from '@/app/utils/type'
import { useRef } from 'react';
import { FaGithubSquare } from "react-icons/fa"
import Dialog from './Dialog';
const ProjectsCard = ({ img, url, title, text, github, id, slide, body }: ProjectType) => {
  const dialogRef = useRef();
  const open = () => {
    dialogRef.current?.showModal();
    console.log(title);
  }
  const close = () => {
    dialogRef.current?.close();
  }
  return (
    <article className="bg-primary-white rounded-lg shadow-md hover:shadow-2xl duration-300">
      <img src={img} alt={title} className="w-full object-cover rounded-t-lg h-32 lg:h-64" />
      <div className="capitalize p-8">
        <h2 className="text-xl tracking-wide font-medium">{title}</h2>
        <p className="mt-4 text-slate-700 leading-loose">{text}</p>
        <div className="mt-4">
          <button
            autoFocus
            type="button"
            className="bg-primary-dark text-primary-white hover:bg-accent font-semibold py-2 px-4 rounded transition duration-300"
            onClick={open}
          >
            View project now
          </button>
        </div>
      </div>
      <Dialog title={title} id={id} url={url} img={img} text={text} body={body} github={github} slide={slide} dialogRef={dialogRef} close={close} />
    </article>
  )
}

export default ProjectsCard
