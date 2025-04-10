import React from "react";

const Footer = () => {
  return (
    <footer className="text-center p-8 text-light bg-primary">
      Designed with <span className="inline-block animate-bounce">❤️</span>
      &nbsp;© {new Date().getFullYear()}. All rights reserved
    </footer>
  );
};

export default Footer;
