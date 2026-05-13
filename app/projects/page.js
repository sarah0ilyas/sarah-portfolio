import Nav from "../../components/Nav.js";

const projects = [
  {
    name: "Cropcast",
    description: "Production ML pipeline for agricultural yield forecasting across 13 countries and 6 crops. Automated drift detection, weekly retraining via GitHub Actions, and a FastAPI serving layer deployed on AWS EC2. Caught 1334% MAE degradation on the Grapes model automatically.",
    tags: ["python", "xgboost", "mlops", "fastapi", "docker", "aws", "mlflow"],
    github: "https://github.com/sarah0ilyas/Cropcast",
    demo: "",
    icon: "🌿",
  }
];

export default function ProjectsPage() {
  return (
    <main>
      <Nav />
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 4rem" }}>
        <div style={{ padding: "56px 0 32px" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.08em", color: "var(--text-dim)", textTransform: "uppercase", marginBottom: 16 }}>
            Work
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 500, letterSpacing: "-0.03em", marginBottom: 8 }}>
            Projects
          </h1>
          <p style={{ fontSize: 14, color: "var(--text-muted)", maxWidth: 480 }}>
            Production ML systems and data intelligence tools.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, paddingBottom: 56 }}>
          {projects.map((project) => {
            return (
              <div key={project.name} style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: 12, padding: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: "var(--bg-3)", border: "1px solid var(--border-2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>
                    {project.icon}
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 500, letterSpacing: "-0.01em" }}>{project.name}</div>
                </div>
                <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 16 }}>{project.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                  {project.tags.map(tag => {
                    return (
                      <span key={tag} style={{ fontSize: 10, color: "#888", background: "var(--bg-3)", border: "1px solid var(--border-2)", padding: "3px 8px", borderRadius: 4 }}>{tag}</span>
                    );
                  })}
                </div>
                <div style={{ display: "flex", gap: 16 }}>
                  {project.github && <a href={project.github} target="_blank" style={{ fontSize: 12, color: "var(--text-dim)" }}>↗ GitHub</a>}
                  {project.demo && <a href={project.demo} target="_blank" style={{ fontSize: 12, color: "var(--text-dim)" }}>↗ Live demo</a>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
