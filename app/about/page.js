import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaAddressBook,
  FaFileArrowDown,
  FaGithub,
  FaReact,
} from "react-icons/fa6";
import {
  TbBrandCSharp,
  TbBrandMysql,
  TbBrandNextjs,
  TbDeviceAnalytics,
  TbDevices,
} from "react-icons/tb";

const About = () => {
  const projects = [
    {
      id: 1,
      title: "Areen Order Hub",
      description: "An eCommerce platform built with MERN Stack.",
      image: "/images/Areen.png",
      link: "https://intranet.areen.store/",
    },
    {
      id: 2,
      title: "Hiring Management Syatem",
      description: "An hiring management system built with MERN Stack.",
      image: "/images/Hikers.png",
      link: "http://3.110.196.84:3000/",
    },
    {
      id: 3,
      title: "React Chat App",
      description: "A Chatting App using Firebase Authentication.",
      image: "/images/ChatApp.png",
      link: "https://react-chat-app-gold.vercel.app/",
    },
    {
      id: 4,
      title: "Book Management App",
      description: "A Book Management App with CRUD Operations",
      image: "/images/Book.png",
      link: "https://book-management-app-omega.vercel.app/",
    },
    {
      id: 5,
      title: "Budget Tracker App",
      description: "A Budget Tracking App with CRUD Operations",
      image: "/images/Budget.png",
      link: "https://budget-tracker-8cvn.vercel.app/",
    },
    {
      id: 6,
      title: "ToDo App",
      description: "A Basic TODO App with CRUD Operations",
      image: "/images/ToDo.png",
      link: "https://webdev-projects-flni.vercel.app/",
    },
    {
      id: 7,
      title: "MTunes App",
      description: "A Clone of MTunes App using JS",
      image: "/images/MTunes.png",
      link: "https://webdev-projects-gamma.vercel.app/",
    },
    {
      id: 8,
      title: "Social Modia Posts App",
      description: "A Basic Posting App with CRUD Operations",
      image: "/images/Post.png",
      link: "https://webdev-projects-wxq6.vercel.app/",
    },
  ];

  return (
    <div>
      <div className="container mx-auto p-8 font-serif font-semibold">
        <div className="max-w-2xl mx-auto text-center mb-8 text-purple-100">
          <p className="text-3xl mt-12 mb-3 italic">Hi there!</p>
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

          <div className="mt-5">
            <p className="underline underline-offset-2 italic">
              Top Skill Sets:
            </p>
            <div className="flex space-x-4 p-4">
              <div className="border p-2 rounded-md">
                <FaReact className="text-l text-purple-300" />
                MERN
              </div>
              <div className="border p-2 rounded-md">
                <TbBrandNextjs className="text-l text-purple-300" /> Next.js
              </div>

              <div className="border p-2 rounded-md">
                <TbBrandCSharp className="text-l text-purple-300" /> .NET
              </div>
              <div className="border p-2 rounded-md">
                <TbBrandMysql className="text-l text-purple-300" /> SQL
              </div>
              <div className="border p-2 rounded-md">
                <TbDevices className="text-l text-purple-300" /> UI/UX
              </div>
              <div className="border p-2 rounded-md">
                <FaGithub className="text-l text-purple-300" /> Git
              </div>
              <div className="border p-2 rounded-md">
                <TbDeviceAnalytics className="text-l text-purple-300" /> Data
                Analytics
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          <Link
            href="/contact"
            className="bg-purple-900 text-white p-2 rounded-md flex items-center"
          >
            <FaAddressBook
              className="text-2xl text-white mr-2"
              alt="Contact Logo"
              aria-label="Contact Logo"
            />
            Know more?
          </Link>
          <a
            href="/cv/Madhummithas_Resume.pdf"
            download="Madhummithas_Resume.pdf"
            className="bg-pink-900 text-white p-2 rounded-md flex items-center"
          >
            <FaFileArrowDown
              className="text-2xl text-white mr-2"
              alt="Contact Logo"
              aria-label="Contact Logo"
            />
            Resume
          </a>
        </div>
        <div className="flex items-center justify-center">
          <hr className="w-2/3  border-gray-800" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gradient-to-r from-purple-400 to-pink-800 bg-clip-text text-transparent mt-20">
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
                <h3 className="text-lg font-semibold mb-2 text-center">
                  {project.title}
                </h3>
                <p className="text-sm text-center">{project.description}</p>
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
