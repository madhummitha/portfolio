import React from "react";
import Link from "next/link";
import {
  FaAddressBook,
  FaDatabase,
  FaFileArrowDown,
  FaGithub,
  FaJava,
} from "react-icons/fa6";
import {
  SiAmazonaws,
  SiDocker,
  SiFigma,
  SiGithubactions,
  SiGoogleanalytics,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiReact,
  SiRedis,
} from "react-icons/si";

const About = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container mx-auto p-8 font-serif font-semibold flex flex-col justify-center">
        <div className="max-w-2xl mx-auto text-center mb-8 text-purple-100">
          <p className="text-3xl mt-12 mb-3 italic">Hi there!</p>
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
          <div className="mt-5 flex flex-col items-center">
            <div className="text-center">
              <p className="underline underline-offset-2 italic mb-2">
                Frameworks & Languages:
              </p>
              <div className="flex flex-wrap justify-center gap-4 max-w-xl">
                <div className="flex items-center">
                  <SiReact className="text-l text-purple-300" />
                  <span className="ml-2">React.Js</span>
                </div>
                <div className="flex items-center">
                  <SiJavascript className="text-l text-purple-300" />
                  <span className="ml-2">JavaScript</span>
                </div>
                <div className="flex items-center">
                  <SiNextdotjs className="text-l text-purple-300" />
                  <span className="ml-2">Next.js</span>
                </div>
                <div className="flex items-center">
                  <SiNodedotjs className="text-l text-purple-300" />
                  <span className="ml-2">Node.Js</span>
                </div>
                <div className="flex items-center">
                  <SiMongodb className="text-l text-purple-300" />
                  <span className="ml-2">MongoDB</span>
                </div>
                <div className="flex items-center">
                  <FaJava className="text-l text-purple-300" />
                  <span className="ml-2">Java</span>
                </div>
                <div className="flex items-center">
                  <FaDatabase className="text-l text-purple-300" />
                  <span className="ml-2">SQL</span>
                </div>
              </div>
            </div>

            <div className="text-center mt-5">
              <p className="underline underline-offset-2 italic mb-2">
                DevOps & Infrastructure:
              </p>
              <div className="flex flex-wrap justify-center gap-4 max-w-xl">
                <div className="flex items-center">
                  <SiDocker className="text-l text-purple-300" />
                  <span className="ml-2">Docker</span>
                </div>
                <div className="flex items-center">
                  <SiKubernetes className="text-l text-purple-300" />
                  <span className="ml-2">Kubernetes</span>
                </div>
                <div className="flex items-center">
                  <SiNginx className="text-l text-purple-300" />
                  <span className="ml-2">NGINX</span>
                </div>
                <div className="flex items-center">
                  <FaGithub className="text-l text-purple-300" />
                  <span className="ml-2">Git</span>
                </div>
                <div className="flex items-center">
                  <SiGithubactions className="text-l text-purple-300" />
                  <span className="ml-2">CI/CD Pipeline</span>
                </div>
                <div className="flex items-center">
                  <SiRedis className="text-l text-purple-300" />
                  <span className="ml-2">Redis</span>
                </div>

                <div className="flex items-center">
                  <SiAmazonaws className="text-l text-purple-300" />
                  <span className="ml-2">AWS</span>
                </div>
              </div>
            </div>

            <div className="text-center mt-5">
              <p className="underline underline-offset-2 italic mb-2">
                Others:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center">
                  <SiFigma className="text-l text-purple-300" />
                  <span className="ml-2">Figma</span>
                </div>
                <div className="flex items-center">
                  <SiGoogleanalytics className="text-l text-purple-300" />
                  <span className="ml-2">Data Analytics</span>
                </div>
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
            href="/docs/Madhummitha R - Resume.pdf"
            target="_blank"
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
      </div>
    </div>
  );
};

export default About;
