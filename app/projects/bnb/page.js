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
  SiShopify,
  SiNewrelic,
  SiExpress,
} from "react-icons/si";

const Bnb = () => {
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
        Buy N Bill
      </h1>
      <p className="text-purple-100 text-lg mt-2 text-center max-w-3xl mx-auto mb-8">
        The Buy N Bill project is designed to automate the synchronization of
        product data from external sources to both Amazon Seller UAE and Shopify
        platforms. It involves daily data retrieval, price calculation based on
        predefined formulas, and updating product details to enhance e-commerce
        operations.
      </p>
      <div className="flex justify-center">
        <ImageSlideShow
          images={["/images/BNB.png", "/images/BNB.png"]}
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
              <SiNewrelic className="text-l text-purple-300" />
              <span className="ml-2 text-purple-100">New Relic</span>
            </div>
            <div className="flex items-center">
              <SiShopify className="text-l text-purple-300" />
              <span className="ml-2 text-purple-100">Shopify</span>
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
            Product Data Synchronization:
          </span>{" "}
          Daily retrieval and storage of product details from external sources.
        </p>
        <p>
          <span className="text-lg font-semibold">
            Automated Price Calculation:
          </span>{" "}
          Applying predefined formulas to compute pricing for products.
        </p>
        <p>
          <span className="text-lg font-semibold">
            Amazon Seller UAE Integration:
          </span>{" "}
          Updating product information and pricing on the Amazon Seller UAE
          account.
        </p>
        <p>
          <span className="text-lg font-semibold">Shopify Integration:</span>{" "}
          Uploading and updating product details and pricing on the Shopify
          platform.
        </p>
        <p>
          <span className="text-lg font-semibold">Reporting Module:</span>{" "}
          Generating reports to track synchronization status, pricing updates,
          and overall system performance.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-center max-w-3xl mx-auto">
        Project Outcomes & Impact
      </h2>
      <p className="mb-8 text-center max-w-3xl mx-auto">
        {`The implementation of "Buy N Bill" streamlined the product listing
        process, reduced manual intervention, and ensured consistent and
        accurate product information across Amazon Seller UAE and Shopify
        platforms, leading to improved operational efficiency and enhanced
        e-commerce performance.`}
      </p>
    </div>
  );
};

export default Bnb;
