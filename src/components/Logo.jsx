import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      className="bg-primary w-10 h-10 my-2 rounded-full grid place-items-center cursor-pointer"
      to="/"
    >
      <h1 className="text-light font-extrabold italic">NY</h1>
    </Link>
  );
};

export default Logo;
