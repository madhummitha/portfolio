"use client";
import ImageSlideShow from "@/app/components/ImageSlider";
import { FaArrowLeft } from "react-icons/fa6";
import {
  SiDocker,
  SiGithubactions,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiAmazonaws,
  SiExpress,
} from "react-icons/si";

const Hikers = () => {
  return (
    <div className="bg-black text-purple-100 py-24 px-8 font-serif">
      <div className="max-w-4xl mx-auto">
        <button
          type="button"
          className="flex items-center text-purple-100 mb-8 hover:text-white hover:cursor-pointer transition underline underline-offset-4"
          onClick={() => window.history.back()}
        >
          <FaArrowLeft className="mr-2" />
          Go Back
        </button>
      </div>
      <h1 className="text-4xl font-serif font-bold text-center bg-gradient-to-r from-purple-400 to-pink-900 bg-clip-text text-transparent">
        Hikers
      </h1>
      <p className="text-purple-100 text-lg mt-2 text-center max-w-3xl mx-auto mb-8">
        The HR CRM system is designed to streamline recruitment processes,
        including managing clients, positions, candidates, and interviews. It
        provides a centralized platform for recruiters to track hiring workflows
        efficiently.
      </p>
      <div className="flex justify-center">
        <ImageSlideShow
          images={["/images/crm-ats-1.png", "/images/crm-ats-2.png"]}
          alt="An Image showing a snippet of the Screen to manage hr applications"
        />
      </div>
      <div className="mt-5 flex flex-col items-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-xl">
            <div className="flex items-center">
              <SiReact className="text-l text-purple-300" />
              <span className="ml-2 text-purple-100">React.Js</span>
            </div>
            <div className="flex items-center">
              <SiJavascript className="text-l text-purple-300" />
              <span className="ml-2 text-purple-100">JavaScript</span>
            </div>
            <div className="flex items-center">
              <SiExpress className="text-l text-purple-300" />
              <span className="ml-2 text-purple-100">Express Js</span>
            </div>
            <div className="flex items-center">
              <SiNodedotjs className="text-l text-purple-300" />
              <span className="ml-2 text-purple-100">Node.Js</span>
            </div>
            <div className="flex items-center">
              <SiMongodb className="text-l text-purple-300" />
              <span className="ml-2 text-purple-100">MongoDB</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <div className="flex flex-wrap justify-center gap-4 max-w-xl">
            <div className="flex items-center">
              <SiDocker className="text-l text-purple-300" />
              <span className="ml-2 text-purple-100">Docker</span>
            </div>
            <div className="flex items-center">
              <SiGithubactions className="text-l text-purple-300" />
              <span className="ml-2 text-purple-100">CI/CD Pipeline</span>
            </div>
            <div className="flex items-center">
              <SiAmazonaws className="text-l text-purple-300" />
              <span className="ml-2 text-purple-100">AWS</span>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-center max-w-3xl mx-auto mt-6">
        Key Features
      </h2>
      <div className="flex flex-col gap-2 mb-8 max-w-3xl mx-auto">
        <p>
          <span className="text-lg font-semibold">
            Client & Recruiter Management:
          </span>{" "}
          Maintain and manage client and recruiter details efficiently.
        </p>
        <p>
          <span className="text-lg font-semibold">
            Position & Candidate Tracking:
          </span>{" "}
          Track job positions and associated candidates throughout the hiring
          process.
        </p>
        <p>
          <span className="text-lg font-semibold">
            Interview Scheduling & Dashboards:
          </span>{" "}
          Schedule interviews and monitor recruitment metrics in real time.
        </p>
        <p>
          <span className="text-lg font-semibold">
            Role-Based Access & Permissions:
          </span>{" "}
          Control user access based on roles to ensure data security.
        </p>
        <p>
          <span className="text-lg font-semibold">
            Centralized Data Storage & Reporting:
          </span>{" "}
          Store and retrieve recruitment data with insightful reports.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-center max-w-3xl mx-auto">
        Project Outcomes & Impact
      </h2>
      <p className="mb-8 text-center max-w-3xl mx-auto">
        The HR CRM system enhanced recruitment efficiency, reduced manual
        effort, and improved candidate tracking. It enabled better collaboration
        between recruiters and ensured a streamlined hiring process.
      </p>
    </div>
  );
};

export default Hikers;
