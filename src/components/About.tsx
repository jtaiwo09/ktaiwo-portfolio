import React from "react";
import Title from "./Title";
import Image from "next/image";
import Profile from "/public/images/profile.jpeg";
import Reveal from "./Reveal";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next",
  "Vue",
  "Express",
  "Node Js",
  "Typescript",
  "MongoDB",
  "React Query",
  "Tailwind CSS",
];

const About = () => {
  return (
    <div className="container py-10" id="about">
      <Title text="About" before="02." />
      <div className="flex flex-col-reverse md:flex-row justify-between gap-8">
        <div className="font-sans text-base sm:text-lg w-full md:w-7/12 flex flex-col gap-y-6 justify-between sm:text-left ">
          <Reveal>
            <p>
              I&apos;ve built products for companies and businesses ranging from
              small to large-scale and enterprise-level applications with focus
              on fast, elegant and accessible user experiences.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Currently, I work at Spleet Africa as a Lead Frontend Engineer,
              where I built a rental solution for landlords and tenants,
              crafting thoughtful and inclusive experiences that adhere to web
              standards.
            </p>
          </Reveal>
          <Reveal>
            <p>
              My passion for innovation and technology led me to co-found
              CitiTasker Technology, a platform that connects individuals in
              need of outsourcing tasks or local services with providers looking
              to earn money. The project is still in the development phase. In
              my role as the lead frontend engineer, I am committed to designing
              user-friendly and captivating experiences that empower users to
              effortlessly navigate the application.
            </p>
          </Reveal>
          <Reveal>
            <p>Here are a few technologies that I&apos;ve used recently</p>
          </Reveal>
          <ul className=" flex gap-y-2  max-w-[400px] flex-wrap">
            {skills.map((el, i) => (
              <Reveal key={i} extraClass="flex gap-3 items-center w-1/2">
                <li className="w-fit">- {el}</li>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal
          hidden={{ x: "100%", opacity: 0 }}
          visible={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          extraClass="md:max-w-[350px] h-[350px] md:w-5/12 w-full"
          innerClass="w-full h-full"
        >
          <Image
            src={Profile}
            alt="Taiwo Joseph"
            className="shrink-0 w-full h-full ml-auto object-cover rounded-md md:rounded-full mix-blend-luminosity hover:mix-blend-normal duration-300 transition-all"
          />
        </Reveal>
      </div>
    </div>
  );
};

export default About;
