"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa6";
import projects from "../data/projects";
import Link from "next/link";

const About = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <div>
      <div className="container mx-auto p-8 font-serif font-semibold">
        <div className="max-w-2xl mx-auto text-center mb-10 text-purple-100 mt-12 text-3xl italic">
          Projects
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gradient-to-r from-purple-400 to-pink-800 bg-clip-text text-transparent">
          {visibleProjects.map((project) => (
            <div key={project.id} className="mb-8">
              <Link href={project.link}>
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
              </Link>
              <p className="text-sm text-center">{project.description}</p>
              <div className="flex justify-center mt-2 space-x-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-purple-700 to-purple-900 text-white px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* {!showAll && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 flex items-center space-x-2"
            >
              <span>More Projects</span>
              <FaArrowDown className="text-l" />
            </button>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default About;
