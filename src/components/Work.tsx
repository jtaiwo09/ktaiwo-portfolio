import React from "react";
import Title from "./Title";
import Project from "./Project";

const data = [
  {
    name: "Spleet Africa",
    description:
      "Spleet is a rental solution for landlords and tenants. On Spleet you can lease your apartment, rent a space, take a rental loan, verify tenants and automatically collect rent.",
    url: "https://spleet.africa",
    technologies: ["VueJS", "NuxtJS", "Tailwind", "Vuex", "Pinia"],
  },
  {
    name: "Truhr",
    description:
      "Truhr is a recruitment solutions to both employers and job seekers, providing access to the best opportunities available in the market.",
    url: "https://truhr.vercel.app",
    technologies: ["Typescript", "NextJS", "Tailwind"],
  },
  {
    name: "CitiTasker",
    description:
      "CitiTasker is a trusted community platform that connects people who need to outsource tasks and find local services, with people who are looking to earn money",
    url: "https://cititasker.vercel.app/waitlist",
    technologies: ["Typescript", "NextJS", "Tailwind"],
  },
  {
    name: "Blac Box",
    description:
      "Blacbox is a multi-API system that delivers data on various services to help businesses grow.",
    url: "https://blacbox.app",
    technologies: ["Typescript", "ReactJS", "MUI"],
  },
];

const Work = () => {
  return (
    <div className="container py-10" id="work">
      <Title text="Work" before="03." />
      <p className="font-mono text-secondary dark:text-primary my-4 text-sm lg:text-xl font-medium">
        Featured Projects
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-full gap-6 mt-10">
        {data.map((el, i) => (
          <Project key={i} data={el} />
        ))}
      </div>
    </div>
  );
};

export default Work;
