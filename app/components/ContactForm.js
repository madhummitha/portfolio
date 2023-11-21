import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaPhone } from "react-icons/fa6";
import { handleChange, handleSubmit } from "../../app/contact/page";

const ContactForm = ({ formData, setFormData, handleChange, handleSubmit }) => {
  return (
    <div>
      <div className="container mx-auto flex items-center justify-center h-screen">
        <form
          className="flex flex-col items-center p-4 w-full max-w-md"
          onSubmit={(e) => handleSubmit(e, formData, setFormData)}
        >
          <h1 className="text-3xl font-semibold mb-4 font-serif bg-gradient-to-r from-purple-400 to-pink-900 bg-clip-text text-transparent text-center">
            {"Let's have a chat!"}
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
              value={formData.name}
              onChange={(e) => handleChange(e, formData, setFormData)}
              className="mt-1 p-2 border rounded-md w-full text-black"
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
              value={formData.email}
              onChange={(e) => handleChange(e, formData, setFormData)}
              className="mt-1 p-2 border rounded-md w-full text-black"
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
              value={formData.phone}
              onChange={(e) => handleChange(e, formData, setFormData)}
              className="mt-1 p-2 border rounded-md w-full text-black"
            />
          </div>
          <button
            type="submit"
            className="p-2 rounded-md text-md font-semibold font-serif bg-gradient-to-r from-purple-700 to-pink-800 hover:from-pink-700 hover:to-purple-800 w-full"
          >
            Submit
          </button>
        </form>

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
          <div className="flex items-center justify-center space-x-2 mb-2">
            <FaPhone className="text-xl text-purple-300" />
            <p className="text-lg">9962301619</p>
          </div>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <FaEnvelope className="text-xl text-purple-300" />
            <p className="text-lg">madhummithar@gmail.com</p>
          </div>

          <div className="mt-2">
            <ul className="flex justify-center space-x-6 items-center">
              <li>
                <Link href="https://github.com/madhummitha" target="_blank">
                  <FaGithub
                    className="text-2xl text-white"
                    alt="GitHub Logo"
                    aria-label="GitHub Logo"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/madhummithar/"
                  target="_blank"
                >
                  <FaLinkedinIn
                    className="text-2xl text-white"
                    alt="LinkedIn Logo"
                    aria-label="LinkedIn Logo"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
