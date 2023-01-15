import React from "react";

export default function Footer() {
  return (
    <div className="footerContainer">
      <a href="https://jrdev.live" target="_blank" className="footerLinks">
        Jr Dev
      </a>
      <a
        href="https://github.com/juniorjj13/todo"
        target="_blank"
        className="footerLinks"
      >
        <i className="devicon-github-original"></i>
      </a>
      <a href="https://thebarista.dev" target="_blank" className="footerLinks">
        TheBarista Dev
      </a>
    </div>
  );
}
