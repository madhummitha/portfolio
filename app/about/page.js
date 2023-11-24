import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAddressBook, FaFileArrowDown } from "react-icons/fa6";

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
      title: "Budget Tracker App",
      description: "Budget Tracker App",
      image: "/images/hero-image.png",
      link: "https://budget-tracker-8cvn.vercel.app/",
    },
  ];

  return (
    <div>
      <div className="container mx-auto p-8 font-serif font-semibold">
        <div className="max-w-2xl mx-auto text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-800 bg-clip-text text-transparent">
          <p className="text-3xl mt-10 mb-3">Hi there!</p>
          {/* <p className="text-2xl mb-4">Welcome to my personal space!</p> */}
          <p>
            {
              "I'm a tech enthusiast translating ideas into elegant code. As a software developer, I thrive on problem-solving and specialize in creating user-friendly solutions. Whether it's optimizing processes or building intuitive interfaces, I'm committed to making technology work seamlessly."
            }
          </p>
          <br />
          <p>
            {
              "Let's collaborate and bring your ideas to life through the power of clean and efficient software solutions."
            }
          </p>
          <p className="mt-5">Top Skill Sets:</p>
          <ul className="flex space-x-4 item-center justify-center">
            <li>➢ MERN</li>
            <li>➢ Next.js</li>
            <li>➢ .NET</li>
            <li>➢ SQL</li>
          </ul>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          <Link
            href="/contact"
            className="bg-purple-900 text-white p-2 rounded-md flex items-center"
          >
            <FaAddressBook
              className="text-3xl text-white mr-2"
              alt="Contact Logo"
              aria-label="Contact Logo"
            />
            Know more?
          </Link>
          <a
            href="/cv/sample.pdf"
            download="your-cv.pdf"
            className="bg-pink-900 text-white p-2 rounded-md flex items-center"
          >
            <FaFileArrowDown
              className="text-3xl text-white mr-2"
              alt="Contact Logo"
              aria-label="Contact Logo"
            />
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
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
              </a>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            href="/projects"
            className="w-1/4 text-center p-2 rounded-md text-md font-semibold font-serif bg-gradient-to-r from-purple-700 to-pink-800 hover:from-pink-700 hover:to-purple-800 text-white"
          >
            {"Read More ➜"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
