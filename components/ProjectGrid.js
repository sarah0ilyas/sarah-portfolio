export default function ProjectGrid({ projects }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
      {projects.map((project) => (
        <div key={project.name} style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: 12, padding: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: "var(--bg-3)", border: "1px solid var(--border-2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>
              {project.icon}
            </div>
            <div style={{ fontSize: 14, fontWeight: 500 }}>{project.name}</div>
          </div>
          <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.65, marginBottom: 12 }}>{project.description}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 12 }}>
            {project.tags.map(tag => (
              <span key={tag} style={{ fontSize: 10, color: "#888", background: "var(--bg-3)", border: "1px solid var(--border-2)", padding: "2px 8px", borderRadius: 4 }}>{tag}</span>
            ))}
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {project.github && <a href={project.github} target="_blank" style={{ fontSize: 11, color: "#888" }}>↗ GitHub</a>}
            {project.demo && <a href={project.demo} target="_blank" style={{ fontSize: 11, color: "#888" }}>↗ Live demo</a>}
          </div>
        </div>
      ))}
    </div>
  );
}
