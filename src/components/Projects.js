import React from 'react'
import { projects } from '../data.js'
export const Projects = () => {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px=40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            some stuff about the following apps
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="sm:w-1/2 w-100 p-4"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex relative">
                <img alt="gallery" className src={project.image} />
              </div>
              <div>
                <h2>{project.subtitle}</h2>
                <h1>{project.title}</h1>
                <p className="leading-relaxed">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
