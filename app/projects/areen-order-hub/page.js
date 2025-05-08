"use client";

import ImageSlideShow from "@/app/components/ImageSlider";
import { FaArrowLeft } from "react-icons/fa6";
import {
  SiAmazonaws,
  SiDocker,
  SiExpress,
  SiGithubactions,
  SiJavascript,
  SiMongodb,
  SiNewrelic,
  SiNodedotjs,
  SiReact,
  SiShopify,
} from "react-icons/si";

const AreenOrderHub = () => {
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
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-800 bg-clip-text text-transparent">
        Areen Order Hub
      </h1>
      <p className="text-purple-100 text-lg mt-2 text-center max-w-3xl mx-auto mb-8">
        Areen Order Hub is a robust order and inventory management system that
        synchronizes orders from multiple Shopify and Magento stores. It
        streamlines stock updates, shipment creation, and order tracking while
        integrating with third-party logistics providers for seamless delivery
        management.
      </p>
      <div className="flex justify-center">
        <ImageSlideShow
          images={["/images/order-hub-1.png", "/images/order-hub-2.png"]}
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
            <div className="flex items-center">
              <SiShopify className="text-l text-purple-300" />
              <span className="ml-2 text-purple-100">Shopify</span>
            </div>
            <div className="flex items-center">
              <SiNewrelic className="text-l text-purple-300" />
              <span className="ml-2 text-purple-100">New Relic</span>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-center max-w-3xl mx-auto mt-6">
        Key Features
      </h2>
      <div className="flex flex-col gap-2 mb-8 max-w-3xl mx-auto">
        <p>
          <span className="text-lg font-semibold">Multi-Store Order Sync:</span>{" "}
          Automatically sync orders from multiple Shopify and Magento stores.
        </p>
        <p>
          <span className="text-lg font-semibold">
            Inventory Sync with OracleDB:
          </span>{" "}
          Scheduled jobs ensure real-time stock updates across platforms.
        </p>
        <p>
          <span className="text-lg font-semibold">
            Elite Carrier Integration:
          </span>{" "}
          Automate shipment creation and order tracking with a logistics
          provider.
        </p>
        <p>
          <span className="text-lg font-semibold">
            AWB Bill & Barcode Scanning:
          </span>{" "}
          Generate AWB bills and manage deliveries with barcode scanning.
        </p>
        <p>
          <span className="text-lg font-semibold">
            Batch Processing for Orders & Stock:
          </span>{" "}
          Efficiently pull orders and update inventory in bulk.
        </p>
        <p>
          <span className="text-lg font-semibold">NewRelic Monitoring:</span>{" "}
          Track application performance and system health in real time.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-center max-w-3xl mx-auto">
        Project Outcomes & Impact
      </h2>
      <p className="mb-8 text-center max-w-3xl mx-auto">
        AOH improved operational efficiency by automating order sync, inventory
        updates, and shipment tracking. It reduced manual efforts, enhanced
        delivery accuracy, and ensured seamless e-commerce operations.
      </p>
    </div>
  );
};

export default AreenOrderHub;
