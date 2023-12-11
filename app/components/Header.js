import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen">
      <div className="lg:w-1/2">
        <p className="text-6xl font-serif bg-gradient-to-r from-purple-400 to-pink-900 bg-clip-text text-transparent text-center m-4">
          {"Hi, I'm Madhummitha"}
        </p>
        <p className="text-2xl font-semibold text-center font-serif bg-gradient-to-r from-purple-400 to-pink-900 bg-clip-text text-transparent">
          A Passionate Software Developer
        </p>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0 lg:w-[400px] lg:h-[400px] w-[250px] h-[250px]  relative">
        <Image
          src="/images/Pics.png"
          alt="hero image"
          className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          // className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          width={250}
          height={200}
        />
      </div>
    </div>
  );
};

export default Header;
