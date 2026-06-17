"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Mount gate: theme is unknown during SSR, so we render a neutral
    // placeholder until the client mounts to avoid a hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.6;
    }
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
    audioRef.current?.play().catch(() => {});
  };

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={24}
        height={24}
        sizes="24x24"
        alt="Loading theme toggle"
        priority={false}
      />
    );

  return (
    <>
      <button
        onClick={toggleTheme}
        aria-label="Toggle color theme"
        className="text-secondary dark:text-primary transition-transform hover:scale-110"
      >
        {resolvedTheme === "dark" ? (
          <FiSun className="text-xl" />
        ) : (
          <FiMoon className="text-xl" />
        )}
      </button>
      <audio src="/sounds/click.wav" ref={audioRef} className="hidden" />
    </>
  );
};

export default ThemeSwitch;
