"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa6";
import projects from "../data/projects";

const About = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div>
      <div className="container mx-auto p-8 font-serif font-semibold">
        <div className="max-w-2xl mx-auto text-center mb-10 text-purple-100 mt-12 text-3xl italic">
          Projects
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gradient-to-r from-purple-400 to-pink-800 bg-clip-text text-transparent">
          {visibleProjects.map((project) => (
            <div key={project.id} className="mb-8">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Image
                  width={400}
                  height={400}
                  sizes="400px 500px"
                  src={project.image}
                  alt={project.title}
                  className="mx-auto rounded-md"
                />
                <h3 className="text-lg font-semibold mb-2 text-center">
                  {project.title}
                </h3>
                <p className="text-sm text-center">{project.description}</p>
              </a>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 flex items-center space-x-2"
            >
              <span>More Projects</span>
              <FaArrowDown className="text-l" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
