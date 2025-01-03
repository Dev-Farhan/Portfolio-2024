import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const [showAll, setShowAll] = useState(false); // state to toggle between showing 4 or all projects

  // Limit the number of projects displayed initially to 4
  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 4);

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {displayedProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-8 flex flex-wrap lg:justify-center"
          >
            <div className="w-full lg:w-1/4">
              <motion.img
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                src={project.image}
                alt={project.title}
                className="mb-6 rounded"
                width={150}
                height={150}
              />
            </div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </a>
        ))}
      </div>
      {/* Show "View All" button only if there are more than 4 projects */}
      {PROJECTS.length > 4 && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-4 mx-auto block px-6 py-2 border border-white text-white text-xs hover:border-transparent hover:bg-purple-900 hover:transition-all hover:ease-in-out rounded"
        >
          View All
        </button>
      )}
      {/* Show "View Less" button if all projects are displayed */}
      {showAll && (
        <button
          onClick={() => setShowAll(false)}
          className="mt-4 mx-auto block px-6 py-2 border border-white text-white text-xs hover:border-transparent hover:bg-purple-900 hover:transition-all hover:ease-in-out rounded"
        >
          View Less
        </button>
      )}
    </div>
  );
};

export default Projects;
