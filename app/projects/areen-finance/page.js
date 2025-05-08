"use client";
import ImageSlideShow from "@/app/components/ImageSlider";
import { FaArrowLeft } from "react-icons/fa6";
import {
  SiDocker,
  SiGithubactions,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiReact,
  SiAmazonaws,
} from "react-icons/si";

const AreenFinance = () => {
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
        Areen Finance
      </h1>
      <p className="text-purple-100 text-lg mt-2 text-center max-w-3xl mx-auto mb-8">
        Areen Finance is a system for managing orders, provisions, tax invoices,
        and sales personnel relationships. It streamlines financial tracking and
        automates workflows to improve efficiency. The platform ensures accurate
        data management and seamless user collaboration.
      </p>
      <div className="flex justify-center">
        <ImageSlideShow
          images={[
            "/images/fin-gl-code.png",
            "/images/fin-customers.png",
            "/images/fin-provisions.png",
            "/images/fin-users.png",
          ]}
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
              <SiNextdotjs className="text-l text-purple-300" />
              <span className="ml-2 text-purple-100">Next.js</span>
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
              <SiKubernetes className="text-l text-purple-300" />
              <span className="ml-2 text-purple-100">Kubernetes</span>
            </div>
            <div className="flex items-center">
              <SiNginx className="text-l text-purple-300" />
              <span className="ml-2 text-purple-100">NGINX</span>
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
          <span className="text-lg font-semibold">Customer Management:</span>{" "}
          Maintain a centralized repository of customer information where amount
          can be allocated and transferred to users.
        </p>
        <p>
          <span className="text-lg font-semibold">GL Codes Management:</span>{" "}
          Manage GL codes to ensure accurate financial tracking and reporting.
        </p>
        <p>
          <span className="text-lg font-semibold">Provisions Dashboard: </span>{" "}
          Provide a filtered view of GL provision allocations for better
          financial oversight.
        </p>
        <p>
          <span className="text-lg font-semibold">Provisions Management: </span>{" "}
          Handle the creation and approval processes of provisions, streamlining
          workflow efficiency.
        </p>
        <p>
          <span className="text-lg font-semibold">
            Tax Invoices Management:{" "}
          </span>{" "}
          Manage tax invoices associated with provisions, ensuring compliance
          and accurate record-keeping.
        </p>
        <p>
          <span className="text-lg font-semibold">Roles & Permissions: </span>{" "}
          Implement module-based permissions to control access and actions based
          on user roles involved in the provision process.
        </p>
        <p>
          <span className="text-lg font-semibold">
            Sales Personnel Management:{" "}
          </span>{" "}
          Manage relationships between sales supervisors and sales managers,
          along with GL allocations, to optimize sales operations.
        </p>
        <p>
          <span className="text-lg font-semibold">Email Notifications: </span>{" "}
          Set up scenario-based email notifications to keep users informed about
          relevant activities and updates in the provision process.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-center max-w-3xl mx-auto">
        Project Outcomes & Impact
      </h2>
      <p className="mb-8 text-center max-w-3xl mx-auto">
        The system improved operational efficiency and financial accuracy. It
        enhanced collaboration among users and ensured compliance with financial
        processes. The scalable architecture allows for future enhancements.
      </p>
    </div>
  );
};

export default AreenFinance;
