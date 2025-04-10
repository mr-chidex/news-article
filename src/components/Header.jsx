import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const navTabs = ["about", "contact"];

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    });
  }, []);

  return (
    <header
      className={`bg-transparent px-2 py-4 text-slate-800 fixed top-0 w-full z-50  ${
        showNav ? "backdrop-blur-xl shadow-md" : ""
      }`}
    >
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <Logo />
          <ul className="grid text-primary text-lg gap-x-8 grid-flow-col">
            {navTabs.map((tab, index) => (
              <li key={index} className="relative nav-tab pb-1">
                <Link
                  to={tab}
                  className="cursor-pointer tracking-wide text-sm capitalize"
                >
                  {tab}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
