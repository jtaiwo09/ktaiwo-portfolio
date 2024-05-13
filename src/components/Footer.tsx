"use client";
import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container py-10">
      <div className="text-sm font-mono">
        <h5 className="w-fit mx-auto text-center">
          Built with <FaHeart className="text-red-500 text-lg inline-block" />{" "}
          by Taiwo Joseph - {new Date().getFullYear()}©
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
