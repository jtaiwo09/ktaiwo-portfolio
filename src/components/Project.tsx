import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { MdOutlineFolderCopy } from "react-icons/md";

interface IProps {
  data: {
    name: string;
    description: string;
    url: string;
    technologies: string[];
  };
}
const Project = ({ data }: IProps) => {
  return (
    <Link
      href={data.url}
      className="flex flex-col justify-between rounded-md min-h-[260px] border dark:border-none border-info p-6 font-sans transition-all hover:-translate-y-2 duration-300 text-secondary dark:text-info dark:hover:text-primary hover:text-green-700 dark:bg-accent"
    >
      <div className="mb-5">
        <div className="flex justify-between items-center mb-6">
          <MdOutlineFolderCopy className="text-3xl text-green-700 dark:text-primary" />
          <FiExternalLink className="text-xl text-warning dark:hover:text-primary hover:text-green-700 transition-all" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-inherit mb-2">
            {data.name}
          </h3>
          <p className="text-secondary dark:text-warning text-sm">
            {data.description}
          </p>
        </div>
      </div>
      <div className="mt-auto font-mono gap-3 flex flex-wrap">
        {data.technologies.map((el, i) => (
          <span
            className="inline-block text-xs text-secondary dark:text-warning"
            key={i}
          >
            {el}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default Project;
