"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ImageSlideShow = ({ images, alt }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, currentImageIndex]);

  return (
    <Image
      src={images[currentImageIndex]}
      alt={alt}
      priority={true}
      width={1000}
      height={600}
    />
  );
};

export default ImageSlideShow;
