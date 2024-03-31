"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 text-[#ADB7BE]">
        <li>HTML 5</li>
        <li>CSS 3</li>
        <li>JavaScript</li>
        <li>React Js</li>
        <li>Next Js</li>
        <li>Bootstrap</li>
        <li>Java</li>
        <li>Advanced Java and Java EE</li>
        <li>MS SQL</li>
        <li>Version Control (Git)</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 text-[#ADB7BE]">
        <li>Sikha ’O’ Anusandhan University (ITER)</li>
        <li>Master's in Computer Application(MCA) (GPA: 10 / 8.27)</li><br/>
        <li>NIIS Institute Of Information Sc. and, Bhubaneswar</li>
        <li>Bachelor of Science ( Computer Science) (GPA: 10 / 7.34)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 text-[#ADB7BE]">
        <li>Certified Java full-stack Developer Trainee At Besant Technology, Bangalore</li>
        <li>Certified from Computer Application Center(CAC), Bhubaneswar in Python </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-[#ADB7BE]" id="about">
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-7 mt-15 ">
      <Image src="/images/Ashish5.jpg" alt="Ashish image" className="rounded-[3rem]" width={500} height={500} />
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-2 mt-8">About Me</h2>
          <p className="text-sm lg:text-base lg:text-lg text-justify w-650 h-470">
          I am a recent Computer Science graduate with a strong passion for Java Fullstack development. 
          My fascination with technology has driven me to master the Java programming language. As a 
          fresh talent in the industry, I offer a unique perspective, a hunger for learning, and a robust 
          work ethic. I possess solid skills in front-end technologies like HTML, CSS, Bootstrap, JavaScript, 
          and ReactJS, along with expertise in back-end development using Spring Boot and Java.  I am a quick learner, 
          adaptable, and always looking for new challenges to tackle. I am always willing to go the extra mile to ensure 
          for the success. I am excited about the opportunity to work on innovative projects and contribute to the ever-evolving 
          world of technology. I am eager to contribute to innovative projects and be part of a dynamic team. Thank you for considering 
          my profile. I look forward to the opportunity to collaborate and create impactful solutions. Let's create something amazing together! 
          </p>
          <div className="flex flex-row justify-start mt-3">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-2">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
