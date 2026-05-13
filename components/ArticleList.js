"use client";
import { useState } from "react";

function ArticleRow({ article }) {
  const [hovered, setHovered] = useState(false);
  return (
    
      href={"/articles/" + article.slug}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
        padding: "20px 24px",
        marginBottom: 4,
        borderRadius: 8,
        textDecoration: "none",
        background: hovered ? "#112240" : "transparent",
        outline: hovered ? "1px solid #64ffda" : "1px solid transparent",
        transition: "all 0.2s",
      }}
    >
      <div>
        <div style={{ fontSize: 14, color: hovered ? "#64ffda" : "#ccd6f6", lineHeight: 1.45, marginBottom: 6, transition: "color 0.2s" }}>
          {article.title}
        </div>
        <div style={{ fontSize: 11, color: "#8892b0", display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
          <span>{article.date}</span>
          <span>{article.readTime}</span>
          {article.tags.map(tag => (
            <span key={tag} style={{ fontSize: 10, color: "#64ffda", background: "rgba(100,255,218,0.1)", border: "1px solid rgba(100,255,218,0.3)", padding: "2px 8px", borderRadius: 4 }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <span style={{ color: hovered ? "#64ffda" : "#8892b0", fontSize: 16, flexShrink: 0, transition: "all 0.2s", transform: hovered ? "translateX(4px)" : "translateX(0)" }}>
        →
      </span>
    </a>
  );
}

export default function ArticleList({ articles }) {
  return (
    <div>
      {articles.map((article) => (
        <ArticleRow key={article.slug} article={article} />
      ))}
    </div>
  );
}
