"use client";
import React, { useState } from "react";

function ArticleRow({ article }) {
  const [hovered, setHovered] = useState(false);
  return React.createElement(
    "a",
    {
      href: "/articles/" + article.slug,
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      style: {
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
      }
    },
    React.createElement(
      "div",
      null,
      React.createElement("div", { style: { fontSize: 14, color: hovered ? "#64ffda" : "#ccd6f6", lineHeight: 1.45, marginBottom: 6, transition: "color 0.2s" } }, article.title),
      React.createElement(
        "div",
        { style: { fontSize: 11, color: "#8892b0", display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" } },
        React.createElement("span", null, article.date),
        React.createElement("span", null, article.readTime),
        ...article.tags.map(tag => React.createElement("span", { key: tag, style: { fontSize: 10, color: "#64ffda", background: "rgba(100,255,218,0.1)", border: "1px solid rgba(100,255,218,0.3)", padding: "2px 8px", borderRadius: 4 } }, tag))
      )
    ),
    React.createElement("span", { style: { color: hovered ? "#64ffda" : "#8892b0", fontSize: 16, flexShrink: 0, transition: "all 0.2s" } }, "→")
  );
}

export default function ArticleList({ articles }) {
  return React.createElement("div", null, articles.map(article => React.createElement(ArticleRow, { key: article.slug, article })));
}