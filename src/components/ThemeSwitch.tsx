"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const audioRef = useRef<any>(null);

  useEffect(() => {
    setMounted(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, [audioRef?.current]);

  const toggleTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    audioRef.current.play();
  };

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );
  return (
    <>
      {resolvedTheme === "dark" ? (
        <FiSun
          className="text-2xl cursor-pointer"
          onClick={toggleTheme}
          title="Activate dark mode"
        />
      ) : (
        <FiMoon
          className="text-2xl cursor-pointer"
          onClick={toggleTheme}
          title="Activate light mode"
        />
      )}
      <audio src="/sounds/click.wav" ref={audioRef} className="hidden"></audio>
    </>
  );
};

export default ThemeSwitch;
