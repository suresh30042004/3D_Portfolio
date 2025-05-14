import React from 'react';
import { words } from "../constants/index.js";
import Button from "../components/button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";

const Hero = () => {
    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src={`${import.meta.env.BASE_URL}images/bg.png`} alt="Background" />
            </div>
            <div className="hero-layout">
                {/* LEFT: Hero content */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>
                                Shaping
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word) => (
                                            <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                                <img
                                                    src={word.imgpath}
                                                    alt={word.text}
                                                    className="xl:w-12 xl:h-12 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1 rounded-full bg-white/50"
                                                />
                                                <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>Into Real-Time Projects</h1>
                            <h1>That Deliver Results</h1>
                        </div>
                        <p className="text-white/50 md:text-xl relative z-10 pointer-events-none">
                            Hi, I'm Suresh Babu, a developer based in Tamil Nadu with a passion for coding.
                        </p>
                    </div>
                    <Button
                        classname="md:w-80 md:h-16 w-60 h-12"
                        id="Button"
                        text="See My Work"
                    />
                </header>

                {/* Right: 3D_Model */}
                <figure>
                    <div className="hero-3d-layout border-red-200 border-2">
                        <HeroExperience />
                    </div>
                </figure>
            </div>
        </section>
    );
};

export default Hero;
