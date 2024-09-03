import React from "react";
import Title from "../Title";
import { projects } from "@/app/data";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section className="py-20 align-element" id="projects">
      <Title text="Projects" />
      <div className="py-16 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
