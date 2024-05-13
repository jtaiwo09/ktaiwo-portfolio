import React from "react";

interface IProps {
  text: string;
  before: string;
}
const Title = ({ text, before }: IProps) => {
  return (
    <div className="font-mono flex w-full">
      <span className="inline-block text-lg md:text-2xl text-green-700 dark:text-primary mr-2">
        {before}
      </span>
      <h2
        className={`relative flex-1 leading-7 mb-4 text-2xl md:text-[30px] capitalize text-secondary dark:text-info after:content-[''] after:max-w-[20%] after:w-full after:h-[0.5px] after:bg-warning after:dark:bg-info after:absolute after:ml-3 after:top-0 after:bottom-0 after:my-auto`}
      >
        {text}
      </h2>
    </div>
  );
};

export default Title;
