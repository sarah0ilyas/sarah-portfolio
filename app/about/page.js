import Nav from "../../components/Nav.js";

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 4rem" }}>
        <div style={{ padding: "56px 0" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.08em", color: "var(--text-dim)", textTransform: "uppercase", marginBottom: 16 }}>About</div>
          <h1 style={{ fontSize: 36, fontWeight: 500, letterSpacing: "-0.03em", marginBottom: 32 }}>Sarah Ilyas</h1>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, fontSize: 15, color: "var(--text-muted)", lineHeight: 1.85, marginBottom: 48 }}>
            <p>I am an ML Engineer based in Istanbul, building production forecasting systems and writing about MLOps, time series ML, and uncertainty quantification.</p>
            <p>Currently working on Cropcast — an agricultural yield forecasting pipeline that detects model drift automatically and retrains itself every week without human intervention. The system tracks 6 crops across 13 countries and caught a 1334% MAE degradation on the Grapes model automatically.</p>
            <p>Previously worked on data intelligence systems for agricultural export tracking across Mexico and Latin America.</p>
          </div>
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: 32, marginBottom: 32 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.08em", color: "var(--text-dim)", textTransform: "uppercase", marginBottom: 16 }}>Skills</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Python", "XGBoost", "Prophet", "SHAP", "Optuna", "MLflow", "FastAPI", "Streamlit", "Docker", "AWS EC2", "GitHub Actions", "Prefect"].map(skill => (
                <span key={skill} style={{ fontSize: 12, color: "#888", background: "var(--bg-2)", border: "1px solid var(--border)", padding: "5px 12px", borderRadius: 20 }}>{skill}</span>
              ))}
            </div>
          </div>
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: 32 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.08em", color: "var(--text-dim)", textTransform: "uppercase", marginBottom: 16 }}>Contact</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a href="https://github.com/sarah0ilyas" target="_blank" style={{ fontSize: 14, color: "var(--text-muted)" }}>↗ github.com/sarah0ilyas</a>
              <a href="https://www.linkedin.com/in/sarahilyas/" target="_blank" style={{ fontSize: 14, color: "var(--text-muted)" }}>↗ linkedin.com/in/sarahilyas</a>
              <a href="mailto:sarahilyas8@gmail.com" style={{ fontSize: 14, color: "var(--text-muted)" }}>↗ sarahilyas8@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
