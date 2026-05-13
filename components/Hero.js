"use client";
import { useState } from "react";

function SkillTag({ label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: 11,
        color: hovered ? "#64ffda" : "#8892b0",
        background: hovered ? "rgba(100,255,218,0.1)" : "transparent",
        border: hovered ? "1px solid rgba(100,255,218,0.5)" : "1px solid #1e3a5f",
        padding: "4px 12px",
        borderRadius: 4,
        transition: "all 0.2s",
        cursor: "default",
        letterSpacing: "0.05em",
      }}
    >
      {label}
    </span>
  );
}

export default function Hero() {
  return (
    <div style={{
      padding: "64px 0 56px",
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: 56,
      alignItems: "start",
      borderBottom: "1px solid #1e3a5f",
    }}>
      <div>
        <div style={{ fontSize: 11, letterSpacing: "0.1em", color: "#64ffda", textTransform: "uppercase", marginBottom: 20 }}>
          ML Engineer · Istanbul
        </div>
        <h1 style={{ fontSize: 56, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 12, color: "#ccd6f6" }}>
          Sarah Ilyas
        </h1>
        <p style={{ fontSize: 14, color: "#8892b0", lineHeight: 1.75, marginBottom: 28, maxWidth: 420 }}>
          I design and build production ML pipelines — from drift detection to automated retraining. Currently working on agricultural yield forecasting at scale.
        </p>
        <div style={{ display: "flex", gap: 10, marginBottom: 36 }}>
          <a href="/projects" style={{ fontSize: 12, padding: "9px 20px", borderRadius: 4, background: "transparent", color: "#64ffda", fontWeight: 500, border: "1px solid #64ffda", letterSpacing: "0.05em" }}>
            View projects
          </a>
          <a href="/articles" style={{ fontSize: 12, padding: "9px 20px", borderRadius: 4, color: "#8892b0", border: "1px solid #1e3a5f", letterSpacing: "0.05em" }}>
            Read articles
          </a>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
          {["Python", "XGBoost", "MLOps", "FastAPI", "Docker", "AWS"].map(tag => (
            <SkillTag key={tag} label={tag} />
          ))}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, paddingTop: 8 }}>
        <div style={{ width: 220, height: 220, borderRadius: "50%", overflow: "hidden", border: "2px solid #64ffda" }}>
          <img
            src="/images/profile.jpg"
            alt="Sarah Ilyas"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 13, fontWeight: 500, color: "#ccd6f6" }}>Sarah Ilyas</div>
          <div style={{ fontSize: 11, color: "#8892b0", marginTop: 2 }}>ML Engineer</div>
        </div>
      </div>
    </div>
  );
}