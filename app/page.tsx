import Nav from "../components/Nav.js";
import Hero from "../components/Hero.js";
import ArticleList from "../components/ArticleList.js";
import ProjectGrid from "../components/ProjectGrid.js";

const recentArticles = [
  {
    title: "Prediction intervals vs confidence intervals: why confusing them will break your production model",
    date: "May 12, 2026",
    readTime: "8 min read",
    tags: ["statistics", "mlops"],
    slug: "prediction-vs-confidence-intervals",
  },
  {
    title: "Prediction intervals are more useful than point estimates",
    date: "May 5, 2026",
    readTime: "11 min read",
    tags: ["xgboost", "uncertainty"],
    slug: "prediction-intervals-xgboost",
  },
  {
    title: "Building a self-healing ML pipeline",
    date: "Apr 28, 2026",
    readTime: "13 min read",
    tags: ["mlops", "drift"],
    slug: "self-healing-ml-pipeline",
  },
];

const projects = [
  {
    name: "Cropcast",
    description: "Production ML pipeline for agricultural yield forecasting across 13 countries.",
    tags: ["xgboost", "mlops", "fastapi", "docker"],
    github: "https://github.com/sarah0ilyas/Cropcast",
    demo: "",
    icon: "🌿",
  }
];

export default function Home() {
  return (
    <main>
      <Nav />
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 4rem" }}>
        <Hero />
        <section style={{ padding: "44px 0", borderBottom: "1px solid var(--border)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 24 }}>
            <h2 style={{ fontSize: 13, fontWeight: 500 }}>Recent articles</h2>
            <a href="/articles" style={{ fontSize: 12, color: "var(--text-dim)" }}>View all →</a>
          </div>
          <ArticleList articles={recentArticles} />
        </section>
        <section style={{ padding: "44px 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 24 }}>
            <h2 style={{ fontSize: 13, fontWeight: 500 }}>Featured projects</h2>
            <a href="/projects" style={{ fontSize: 12, color: "var(--text-dim)" }}>View all →</a>
          </div>
          <ProjectGrid projects={projects} />
        </section>
      </div>
    </main>
  );
}