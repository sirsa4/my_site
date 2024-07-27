import { ProjectType } from '@/app/utils/type'
import { FaGithubSquare } from "react-icons/fa"
const ProjectsCard = ({ img, url, title, text, github }: ProjectType) => {
  return (
    <article className="bg-primary-white rounded-lg shadow-md hover:shadow-2xl duration-300">
      <img src={img} alt={title} className="w-full object-cover rounded-t-lg h-64" />
      <div className="capitalize p-8">
        <h2 className="text-xl tracking-wide font-medium">{title}</h2>
        <p className="mt-4 text-slate-700 leading-loose">{text}</p>
        <div className="mt-4">
          <button
            type="button"
            className="bg-primary-dark text-primary-white hover:bg-accent font-semibold py-2 px-4 rounded transition duration-300"
          >
            View project now
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProjectsCard
