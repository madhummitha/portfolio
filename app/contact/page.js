import Image from "next/image";
import React from "react";
import Navbar from "../components/NavBar";
import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaTwitter} from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="container mx-auto flex items-center justify-center h-screen">
        {/* Left side content */}
        <form className="flex flex-col items-center p-4 w-full max-w-md">
          <h1 className="text-3xl font-semibold mb-4 font-serif bg-gradient-to-r from-purple-400 to-pink-900 bg-clip-text text-transparent text-center">
            {"Let's have a chat?!"}
          </h1>
          <div className="mb-4 w-full">
            <label
              htmlFor="name"
              className="block text-md font-semibold font-serif bg-gradient-to-r from-purple-400 to-pink-900 bg-clip-text text-transparent"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="email"
              className="block text-md font-semibold font-serif bg-gradient-to-r from-purple-400 to-pink-900 bg-clip-text text-transparent"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="phone"
              className="block text-md font-semibold font-serif bg-gradient-to-r from-purple-400 to-pink-900 bg-clip-text text-transparent"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <button
            type="submit"
            className="p-2 rounded-md text-md font-semibold font-serif bg-gradient-to-r from-purple-700 to-pink-800 hover:from-pink-700 hover:to-purple-800 w-full"
          >
            Submit
          </button>
        </form>

        {/* Right side content */}
        <div className="ml-8 p-4 text-md font-semibold font-serif bg-gradient-to-r from-purple-400 to-pink-800 bg-clip-text text-transparent text-center w-full max-w-md h-full flex flex-col justify-center">
          <div className="mb-4">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="mx-auto"
              width={250}
              height={250}
            />
          </div>
          <p className="text-lg font-semibold mb-2">Madhummitha R</p>
          <p className="text-lg">Ph: 9962301619</p>
          <p className="text-lg">Email: madhummithar@gmail.com</p>
          {/* <div className="flex justify-around mt-4 bg-red-600">
            <a
            href="https://github.com/madhummitha"
            target="_blank"
            // className="bg-purple-900 text-white px-4 rounded-md flex items-center"
          >
            <FaGithub />
          </a>

            <a
              href="https://github.com/madhummitha"
              target="_blank"
              rel="noopener noreferrer"
            >
              
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                style={{ cursor: "pointer" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/madhummitha-r/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                style={{ cursor: "pointer" }}
              />
            </a>
            <a
              href="https://twitter.com/madhummitha_r"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                size="2x"
                style={{ cursor: "pointer" }}
              />
            </a>
          </div> */}
          <div className="mt-10">
              <ul className="flex justify-center space-x-6 items-center">
                <li>
                  <Link href="https://github.com/bmonish" target="_blank">
                    <FaGithub
                      className="text-2xl text-white"
                      alt="GitHub Logo"
                      aria-label="GitHub Logo"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/bmonish/"
                    target="_blank"
                  >
                    <FaLinkedinIn
                      className="text-2xl text-white"
                      alt="LinkedIn Logo"
                      aria-label="LinkedIn Logo"
                    />
                  </Link>
                </li>
                {/* <li>
                  <Link href="https://twitter.com/iammonishb" target="_blank">
                    <FaTwitter
                      className="text-2xl"
                      alt="Twitter Logo"
                      aria-label="Twitter Logo"
                    />
                  </Link>
                </li> */}
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
