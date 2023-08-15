import React from 'react'

export const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flextrow flex-col items-center">
        <h1>Jason Liu</h1>
        <p>
          I'm a new grad from San Jose State University. Raised in the bay area
          I've always taken an interest computers and technology
        </p>
        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
          >
            Work With Me
          </a>
          <a
            href="#projects"
            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
          >
            See My Past Work
          </a>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src="./coding.svg"
        />
      </div>
    </section>
  )
}
