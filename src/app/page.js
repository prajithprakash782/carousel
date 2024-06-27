"use client";
import Image from "next/image";
import { images } from "../app/image";
import { useState } from "react";

export default function Home() {
  const [imageIndex, setImageIndex] = useState(0);

  function nextSlide() {
    setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  function prevSlide() {
    setImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div className="carousel">
        {/* {images.map((image,index) => (
          <div key={index} className="item">
            <button className="left">Left</button>
            <Image className="carousel-img" width={700} height={400} src={image} alt="Images"/>
            <button onClick={handleClick(index)} className="right">Right</button>
          </div>
        ))} */}
        <div>
          <button className="left" onClick={prevSlide}>
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <Image
            width={700}
            height={400}
            src={images[imageIndex]}
            alt="Images"
          />
          <button className="right" onClick={nextSlide}>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
}
