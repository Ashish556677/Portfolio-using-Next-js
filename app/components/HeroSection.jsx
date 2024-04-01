"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection =()=>{
    return(
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <div className="flex justify-start ml-[2.5rem] lg:ml-[.2rem] mb-[10px]"><h1>ASHISH</h1></div>
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-[42px] font-secondary
                    font-semibold uppercase leading-[1]">
                        Hello,
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-800">
                            {" "}
                            I am a{" "}
                        </span>
                        <br></br>
                        <TypeAnimation className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-800 to-blue-500"
                            sequence={[
                                1000, 
                                "Web Developer",
                                1000,
                                "Mobile Developer",
                                1000,
                                "Java Full-stack Developer",
                                1000
                            ]}
                            wrapper="span"
                            speed={70}
                            repeat={Infinity}
                            />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl text-justify">Crafting dynamic web solutions with Java 
                        expertise and as a Java Full Stack Developer demonstrates my passion for learning and expertise in Java and Spring Boot,
                         with a focus on delivering innovative solutions. Let&apos;s &apos;
                        collaborate to bring innovative web solutions to life!
                    </p>
                    <div>
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-emerald-500 via-blue-500 to-green-600 hover:bg-slate-800 text-white mt-3">
                        <a download href="Pdf/Ashish_CV.pdf" className="button button--flex">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download Resume</span>
                        </a>
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-10 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[350px] h-[350px] lg:w-[370px] lg:h-[370px] relative">
                    <Image
                      src="/images/Ashish.png"
                      alt="Ashish image"
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                      width={180}
                      height={160}
                    />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection 