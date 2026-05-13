import Nav from "../../../components/Nav.js";

const articles = {
  "prediction-vs-confidence-intervals": {
    title: "Prediction intervals vs confidence intervals: why confusing them will break your production model",
    date: "May 12, 2026",
    readTime: "8 min read",
    tags: ["statistics", "mlops"],
    content: `
      <p>These two terms appear in every statistics textbook, every ML course, and almost every data science interview. They are almost universally confused — including by people who have been doing this for years.</p>
      <h2>The one-sentence version</h2>
      <p>A <strong>confidence interval</strong> quantifies uncertainty about a parameter — a population mean, a regression coefficient, a model's expected performance.</p>
      <p>A <strong>prediction interval</strong> quantifies uncertainty about a single future observation — the actual value the next data point will take.</p>
      <h2>A concrete example</h2>
      <p>You're predicting wheat yield for a farm in Kansas. You fit a linear regression and get a prediction of 4.2 tonnes/ha.</p>
      <p>The <strong>confidence interval</strong> on that prediction might be [4.0, 4.4] — tight, because you have lots of training data and the regression line is stable.</p>
      <p>The <strong>prediction interval</strong> for the actual next observation might be [3.1, 5.4] — wide, because individual farms vary enormously around the mean even after accounting for their covariates.</p>
      <p>If you use the confidence interval to make decisions about a specific farm, you will be systematically wrong. The right interval for individual predictions is always the prediction interval.</p>
      <h2>Why this matters in production</h2>
      <p>In production ML systems, you are almost always making individual predictions, not statements about population means. Yet most uncertainty quantification tutorials teach confidence intervals first and many practitioners never fully internalise the distinction.</p>
      <p>The prediction interval is always wider. Always. It has to be — it's answering a harder question.</p>
      <h2>The diagnostic test</h2>
      <p>If you're unsure which interval you have, ask: as my training set size grows to infinity, does the interval shrink to zero?</p>
      <p>Yes → confidence interval. No → prediction interval.</p>
      <p>Conformal prediction and quantile regression produce proper prediction intervals. Bootstrap intervals and cross-validation error bars are closer to confidence intervals and will be systematically overconfident when used as prediction intervals.</p>
    `,
  },
  "prediction-intervals-xgboost": {
    title: "Prediction intervals are more useful than point estimates — here's how to add them to XGBoost",
    date: "May 5, 2026",
    readTime: "11 min read",
    tags: ["xgboost", "uncertainty"],
    content: `
      <p>Your XGBoost model predicts house prices. It says £342,000. That number is almost certainly wrong — not because the model is bad, but because a single number implies a precision that no model actually has.</p>
      <h2>Three approaches</h2>
      <p>XGBoost doesn't output uncertainty natively. Here are three ways to add it.</p>
      <h2>1. Quantile regression</h2>
      <p>Train two separate models — one predicting the 5th percentile, one predicting the 95th. The interval between them is your 90% prediction interval. Use the objective <code>reg:quantileerror</code> with <code>quantile_alpha</code> set to your desired quantile.</p>
      <h2>2. Conformal prediction</h2>
      <p>Hold out a calibration set. Measure the absolute residuals on it. The (1-alpha) quantile of those residuals is your margin. Add and subtract it from every new prediction. Coverage is guaranteed by construction.</p>
      <h2>3. Bootstrapping</h2>
      <p>Train 100 models on random subsamples of the training data. Use the spread of their predictions as your uncertainty estimate. Computationally expensive and tends to underestimate uncertainty, but useful for understanding model variance.</p>
      <h2>Which to use</h2>
      <p>For most production use cases, conformal prediction is the right default. The coverage guarantee is mathematically provable and the implementation is simple — you only need to hold out a calibration set.</p>
    `,
  },
  "self-healing-ml-pipeline": {
    title: "Building a self-healing ML pipeline: from drift detection to automated retraining",
    date: "Apr 28, 2026",
    readTime: "13 min read",
    tags: ["mlops", "drift"],
    content: `
      <p>Most ML projects die the same quiet death. You train a model, it performs well, you deploy it, and then you move on. Six months later someone notices the predictions are off.</p>
      <h2>The problem: models go stale</h2>
      <p>When I ran the drift detector on the Grapes model in Cropcast, here's what came back:</p>
      <pre>Data drift — detected: True | drifted cols: 22/23 | share: 95.7%
Model drift — ref MAE: 0.036 | cur MAE: 0.515 | degradation: 1334.2%</pre>
      <p>22 out of 23 features had shifted distribution. The model's error had degraded by 1334%. The solution isn't to retrain once and hope. It's to build a system that catches drift and heals itself.</p>
      <h2>The four stages</h2>
      <p><strong>1. Drift detection</strong> — KS test and PSI to detect distribution shifts in incoming data.</p>
      <p><strong>2. Retraining</strong> — XGBoost with Optuna hyperparameter tuning and walk-forward cross-validation.</p>
      <p><strong>3. Evaluation</strong> — compare new model MAE against production. New model must beat it by 2% to promote.</p>
      <p><strong>4. Promotion</strong> — MLflow Model Registry manages staging → production → archived lifecycle.</p>
      <h2>Orchestration</h2>
      <p>The full pipeline runs every Monday at 6am UTC via GitHub Actions. Tests run first — if they fail, retraining never starts. If retraining fails, deployment never starts. Production only ever sees models that passed every gate.</p>
    `,
  },
};

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return (
      <main>
        <Nav />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 4rem" }}>
          <div style={{ padding: "56px 0" }}>
            <h1 style={{ fontSize: 24, fontWeight: 500 }}>Article not found</h1>
            <a href="/articles" style={{ fontSize: 13, color: "var(--text-dim)", marginTop: 16, display: "block" }}>← Back to articles</a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Nav />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 4rem" }}>
        <div style={{ padding: "56px 0 40px" }}>
          <a href="/articles" style={{ fontSize: 12, color: "var(--text-dim)", textDecoration: "none", marginBottom: 32, display: "block" }}>← All articles</a>
          <div style={{ fontSize: 11, letterSpacing: "0.08em", color: "var(--text-dim)", textTransform: "uppercase", marginBottom: 16 }}>
            {article.tags.join(" · ")}
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.25, marginBottom: 16, color: "var(--text)" }}>
            {article.title}
          </h1>
          <div style={{ fontSize: 12, color: "var(--text-dim)", display: "flex", gap: 16, paddingBottom: 32, borderBottom: "1px solid var(--border)", marginBottom: 40 }}>
            <span>{article.date}</span>
            <span>{article.readTime}</span>
          </div>
          <div
            style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.85 }}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </div>
    </main>
  );
}
