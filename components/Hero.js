export default function Hero() {
  return (
    <div style={{
      padding: "64px 0 56px",
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: 56,
      alignItems: "start",
      borderBottom: "1px solid var(--border)",
    }}>
      <div>
        <div style={{ fontSize: 11, letterSpacing: "0.08em", color: "var(--text-dim)", textTransform: "uppercase", marginBottom: 20 }}>
          ML Engineer · Istanbul
        </div>
        <h1 style={{ fontSize: 56, fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 12 }}>
          Sarah Ilyas
        </h1>
        <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.75, marginBottom: 28, maxWidth: 420 }}>
          I design and build production ML pipelines — from drift detection to automated retraining. Currently working on agricultural yield forecasting at scale.
        </p>
        <div style={{ display: "flex", gap: 10, marginBottom: 36 }}>
          <a href="/projects" className="btn-primary">View projects</a>
          <a href="/articles" className="btn-secondary">Read articles</a>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
          {["Python", "XGBoost", "MLOps", "FastAPI", "Docker", "AWS"].map(tag => (
            <span key={tag} className="skill-tag">{tag}</span>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, paddingTop: 8 }}>
        <div style={{ width: 220, height: 220, borderRadius: "50%", overflow: "hidden", border: "2px solid var(--border)" }}>
          <img
            src="/images/profile.jpg"
            alt="Sarah Ilyas"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text-mid)" }}>Sarah Ilyas</div>
          <div style={{ fontSize: 11, color: "var(--text-dim)", marginTop: 2 }}>ML Engineer</div>
        </div>
      </div>
    </div>
  );
}