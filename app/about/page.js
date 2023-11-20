import React from "react";
import Navbar from "../components/NavBar";
import {
  faFileDownload,
  faFileSignature,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const projects = [
    {
      id: 1,
      title: "React Chat App",
      description: "React Chat App using Firebase Authentication.",
      image: "/images/hero-image.png",
      link: "https://react-chat-app-gold.vercel.app/",
    },
    {
      id: 2,
      title: "Book Management App",
      description: "Book Management App",
      image: "/images/hero-image.png",
      link: "https://book-management-app-omega.vercel.app/",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description of Project 3.",
      image: "/images/hero-image.png",
      link: "https://example.com/project1",
    },
  ];

  return (
    <div>
      {/* <Navbar /> */}
      <div className="container mx-auto p-8 font-serif font-semibold">
        <div className="max-w-2xl mx-auto text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-800 bg-clip-text text-transparent">
          <h1 className="text-3xl mb-4">Welcome to my personal space!</h1>
          {/* <p className="text-lg">
            {"Here are few quick links about the projects that I've done"}
          </p> */}
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          <Link
            href="/contact"
            className="bg-purple-900 text-white px-4 rounded-md flex items-center"
          >
            <FontAwesomeIcon icon={faFileSignature} className="mr-2" />
            Hire Me
          </Link>
          <a
            href="/cv/sample.pdf"
            download="your-cv.pdf"
            className="bg-pink-900 text-white px-4 py-2 rounded-md flex items-center"
          >
            <FontAwesomeIcon icon={faFileDownload} className="mr-2" />
            Download CV
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gradient-to-r from-purple-400 to-pink-800 bg-clip-text text-transparent">
          {projects.map((project) => (
            <div key={project.id} className="mb-8">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Image
                  width={250}
                  height={250}
                  src={project.image}
                  alt={project.title}
                  className="mx-auto rounded-md"
                />
              </a>
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
