import Link from "next/link";
import React from "react";

const EmailContact = () => {
  return (
    <div className="hidden lg:block fixed right-14 bottom-0">
      <div className="flex flex-col items-center gap-8 after:content-[''] after:h-[150px] after:w-[1px] after:bg-info">
        <Link
          href="mailto:ktaiwo660@gmail.com"
          className="text-base text-secondary dark:text-info font-mono dark:hover:text-primary hover:text-green-700 text-xls transition-all tracking-[2px]"
          style={{ writingMode: "vertical-lr", textOrientation: "sideways" }}
        >
          ktaiwo660@gmail.com
        </Link>
      </div>
    </div>
  );
};

export default EmailContact;
