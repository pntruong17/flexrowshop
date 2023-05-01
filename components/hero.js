import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-[680px] overflow-hidden py-5 mb-20">
      <div className="relative w-full h-full">
        <h2 className="text-[60px] sm:text-[80px] md:text-[150px] lg:text-[200px] font-Staatliches leading-[0.8] font-black text-center sm:text-right uppercase">
          Find Your True Style Here!
        </h2>
        <div className="absolute w-[1000px] h-[1500px] -top-[360px] sm:-top-[230px] -left-[250px] sm:-left-[120px]">
          <Image
            className="z-10 scale-50 sm:scale-75 md:scale-90"
            fill
            objectFit="contain"
            src={"/images/hero-image.png"}
            alt=""
          />
        </div>
        <div className="absolute hidden scale-75 sm:scale-100 left-[520px] top-[210px] md:top-[320px] z-0 w-[260px]">
          <h3 className="text-4xl font-Outfit font-bold text-red-400">
            Lightness, elegance and authenticity
          </h3>
        </div>
        <div className="absolute scale-75 sm:scale-100 bg-body_color border-4 rounded-[50px] border-black right-[0px] top-[210px] md:top-[320px] z-10 w-[160px] h-[190px] flex flex-col justify-center items-center">
          <h3 className="text-6xl font-Outfit font-bold text-red-400">30%</h3>
          <h3 className="text-3xl font-Outfit font-semibold">Big Sale</h3>
        </div>
        <div className="absolute scale-50 md:scale-100 right-[0px] md:right-[180px] top-[230px] md:top-[340px] z-10 w-[450px] h-[250px]">
          <Image
            fill
            objectFit="contain"
            src={"/images/curve-arrow.png"}
            alt=""
          />
        </div>
        <button className="absolute z-30 -bottom-5 right-0 w-full sm:w-64 h-32 bg-yellow-600 text-4xl font-Staatliches font-bold cursor-pointer">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default Hero;
