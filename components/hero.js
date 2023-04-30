import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-[680px] overflow-hidden py-5 mb-20">
      <div className="relative w-full h-full">
        <h2 className="text-[80px] md:text-[150px] lg:text-[200px] font-Staatliches leading-[0.8] font-black text-center sm:text-right uppercase">
          Find Your True Style Here!
        </h2>
        <div className="absolute w-[1000px] h-[1500px] -top-[300px] -left-[150px] sm:left-0">
          <Image
            className="z-10 scale-100 md:scale-150"
            fill
            objectFit="contain"
            src={"/images/image-hero.png"}
            alt=""
          />
        </div>
        <div className="absolute right-[0px] bottom-[80px] z-10 w-[450px] sm:w-[650px] h-[250px]">
          <Image
            className="scale-100"
            fill
            objectFit="contain"
            src={"/images/30bigsale.png"}
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
