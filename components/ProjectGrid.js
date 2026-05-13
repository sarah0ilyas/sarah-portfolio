"use client";
import { useState } from "react";

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#112240" : "#0d2137",
        border: "1px solid transparent",
        outline: hovered ? "1px solid #64ffda" : "1px solid #1e3a5f",
        borderRadius: 12,
        padding: 24,
        transition: "all 0.2s",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        cursor: "pointer",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(100,255,218,0.1)", border: "1px solid rgba(100,255,218,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>
          {project.icon}
        </div>
        <div style={{ fontSize: 15, fontWeight: 500, color: hovered ? "#64ffda" : "#ccd6f6", transition: "color 0.2s" }}>
          {project.name}
        </div>
      </div>
      <p style={{ fontSize: 13, color: "#8892b0", lineHeight: 1.7, marginBottom: 16 }}>{project.description}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
        {project.tags.map(tag => (
          <span key={tag} style={{ fontSize: 11, color: "#64ffda", background: "rgba(100,255,218,0.1)", border: "1px solid rgba(100,255,218,0.2)", padding: "3px 10px", borderRadius: 4 }}>
            {tag}
          </span>
        ))}
      </div>
      <div style={{ display: "flex", gap: 12 }}>
        {project.github && <a href={project.github} target="_blank" style={{ fontSize: 12, color: "#8892b0" }}>↗ GitHub</a>}
        {project.demo && <a href={project.demo} target="_blank" style={{ fontSize: 12, color: "#8892b0" }}>↗ Live demo</a>}
      </div>
    </div>
  );
}

export default function ProjectGrid({ projects }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
}