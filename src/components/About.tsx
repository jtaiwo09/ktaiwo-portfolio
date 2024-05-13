import React from "react";
import Title from "./Title";
import Image from "next/image";
import Profile from "/public/images/profile.jpeg";

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
        <div className="flex flex-col gap-y-6 justify-between sm:text-left w-full md:w-7/12">
          <p className="font-sans text-lg">
            I’m an ambitious Front-End Developer who&apos;s passionate about
            coding and looking for a role in the established IT company with the
            opportunity to work with the latest technologies on challenging and
            diverse projects. I currently work with Spleet Africa, a prop-tech
            company in Nigeria as a lead Frontend engineer. I love to build cool
            UI effects, dynamic webpages with amazing animations and creating
            intuitive, dynamic user experiences. I also love to reach out to new
            opportunities accross the globe that will enhance my skills and get
            the opporutinity to work with other programmers as well If I could
            say one of the most interesting things about me, it&apos;s the fact
            that I&apos;m always ready for any challenges that comes to my way.
          </p>
          <p>Here are a few technologies that I&apos;ve used recently</p>
          <ul className=" flex gap-y-2  max-w-[400px] flex-wrap">
            {skills.map((el, i) => (
              <li key={i} className="flex gap-3 items-center w-1/2">
                - {el}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={Profile}
          alt="Taiwo Joseph"
          className="shrink-0 w-full md:w-5/12 md:max-w-[350px] h-[350px] ml-auto object-cover rounded-md md:rounded-full mix-blend-luminosity hover:mix-blend-normal duration-300 transition-all"
        />
      </div>
    </div>
  );
};

export default About;
