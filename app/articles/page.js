import Nav from "../../components/Nav.js";

const articles = [
  { title: "Prediction intervals vs confidence intervals", date: "May 12, 2026", readTime: "8 min read", tags: ["statistics", "mlops"], slug: "prediction-vs-confidence-intervals" },
  { title: "Prediction intervals are more useful than point estimates", date: "May 5, 2026", readTime: "11 min read", tags: ["xgboost", "uncertainty"], slug: "prediction-intervals-xgboost" },
  { title: "Building a self-healing ML pipeline", date: "Apr 28, 2026", readTime: "13 min read", tags: ["mlops", "drift"], slug: "self-healing-ml-pipeline" },
];

export default function ArticlesPage() {
  return (
    <main>
      <Nav />
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 4rem" }}>
        <div style={{ padding: "56px 0 32px" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.08em", color: "var(--text-dim)", textTransform: "uppercase", marginBottom: 16 }}>Writing</div>
          <h1 style={{ fontSize: 36, fontWeight: 500, letterSpacing: "-0.03em", marginBottom: 8 }}>Articles</h1>
          <p style={{ fontSize: 14, color: "var(--text-muted)", maxWidth: 480 }}>Writing about MLOps, time series ML, and uncertainty quantification.</p>
        </div>
        <div style={{ borderTop: "1px solid var(--border)" }}>
          {articles.map((article) => {
            return (
              <a key={article.slug} href={"/articles/" + article.slug} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, padding: "20px 0", borderBottom: "1px solid var(--border)", textDecoration: "none" }}>
                <div>
                  <div style={{ fontSize: 15, color: "var(--text-mid)", lineHeight: 1.45, marginBottom: 8 }}>{article.title}</div>
                  <div style={{ fontSize: 12, color: "var(--text-dim)", display: "flex", gap: 12, alignItems: "center" }}>
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                    {article.tags.map(tag => { return <span key={tag} style={{ fontSize: 10, color: "#888", background: "var(--bg-3)", border: "1px solid var(--border-2)", padding: "2px 8px", borderRadius: 4 }}>{tag}</span>; })}
                  </div>
                </div>
                <span style={{ color: "var(--text-dim)", fontSize: 18, flexShrink: 0 }}>→</span>
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}
