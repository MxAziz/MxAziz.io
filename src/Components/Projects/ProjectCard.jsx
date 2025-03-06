import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#2E3440] dark:bg-[#384143] text-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 p-5 rounded-2xl"
        loading="lazy"
      />

      {/* Card Content */}
      <div className="px-6 py-4">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3 ">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-700 dark:bg-[#485255] text-gray-300 text-xs font-semibold px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
