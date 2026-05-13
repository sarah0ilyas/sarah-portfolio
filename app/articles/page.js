import Nav from "../../components/Nav.js";
import ArticleList from "../../components/ArticleList.js";

const articles = [
  { title: "Prediction intervals vs confidence intervals: why confusing them will break your production model", date: "May 12, 2026", readTime: "8 min read", tags: ["statistics", "mlops"], slug: "prediction-vs-confidence-intervals" },
  { title: "Prediction intervals are more useful than point estimates — here's how to add them to XGBoost", date: "May 5, 2026", readTime: "11 min read", tags: ["xgboost", "uncertainty"], slug: "prediction-intervals-xgboost" },
  { title: "Building a self-healing ML pipeline: from drift detection to automated retraining", date: "Apr 28, 2026", readTime: "13 min read", tags: ["mlops", "drift"], slug: "self-healing-ml-pipeline" },
];

export default function ArticlesPage() {
  return (
    <main>
      <Nav />
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 4rem" }}>
        <div style={{ padding: "56px 0 32px" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.08em", color: "#64ffda", textTransform: "uppercase", marginBottom: 16 }}>Writing</div>
          <h1 style={{ fontSize: 36, fontWeight: 500, letterSpacing: "-0.03em", marginBottom: 8, color: "#ccd6f6" }}>Articles</h1>
          <p style={{ fontSize: 14, color: "#8892b0", maxWidth: 480 }}>Writing about MLOps, time series ML, and uncertainty quantification.</p>
        </div>
        <div style={{ borderTop: "1px solid #1e3a5f" }}>
          <ArticleList articles={articles} />
        </div>
      </div>
    </main>
  );
}
