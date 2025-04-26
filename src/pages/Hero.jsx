import React from "react";
import { words } from "../constants/context";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/public/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}

        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 py-5">
          <div className="felx flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="size-7 xl:size-12 md:size-10 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span className="text-white-50">{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results.</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none pb-5">
              Hi, i am Sushant, a full stack devloper with a passion for code.
            </p>
          </div>
          <Button
            className="w-60 h-12 md:w-80 md:h-12"
            id="button"
            text="See my Work"
          />
        </header>

        {/* RIGHT: 3D Model */}
        
              
      </div>
    </section>
  );
};

export default Hero;
