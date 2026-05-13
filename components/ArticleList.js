import React from "react";

export default function ArticleList({ articles }) {
  return React.createElement(
    "div",
    null,
    articles.map((article) =>
      React.createElement(
        "a",
        {
          key: article.slug,
          href: "/articles/" + article.slug,
          style: {
            display: "flex",
            justifyContent: "space-between",
            padding: "16px 0",
            borderBottom: "1px solid var(--border)",
            textDecoration: "none",
          },
        },
        React.createElement(
          "div",
          { style: { fontSize: 14, color: "var(--text-mid)", marginBottom: 6 } },
          article.title
        ),
        React.createElement(
          "span",
          { style: { color: "var(--text-dim)" } },
          "→"
        )
      )
    )
  );
}
