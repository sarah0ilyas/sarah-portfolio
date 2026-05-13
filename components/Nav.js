"use client";
import { useState } from "react";

function NavLink({ href, children, target }) {
  const [hovered, setHovered] = useState(false);
  return (
    
      href={href}
      target={target}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: 13,
        color: hovered ? "#64ffda" : "#8892b0",
        transition: "color 0.2s",
        display: "inline-block",
        letterSpacing: "0.05em",
      }}
    >
      {children}
    </a>
  );
}

export default function Nav() {
  return (
    <nav style={{
      borderBottom: "1px solid #1e3a5f",
      padding: "0 4rem",
      height: 64,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      maxWidth: 1280,
      margin: "0 auto",
    }}>
      <a href="/" style={{ fontSize: 15, fontWeight: 500, letterSpacing: "-0.02em", color: "#ccd6f6" }}>
        Sarah Ilyas
      </a>
      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        <NavLink href="/articles">Articles</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="https://www.linkedin.com/in/sarahilyas/" target="_blank">LinkedIn</NavLink>
        <a href="mailto:sarahilyas8@gmail.com" style={{ fontSize: 12, padding: "7px 16px", borderRadius: 4, background: "transparent", color: "#64ffda", fontWeight: 500, border: "1px solid #64ffda", letterSpacing: "0.05em" }}>
          Get in touch
        </a>
      </div>
    </nav>
  );
}
