import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sarah Ilyas — ML Engineer",
  description: "ML Engineer building production forecasting systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <style>{`
          .nav-link {
            font-size: 13px;
            color: var(--text-muted);
            transition: color 0.2s, transform 0.2s;
            display: inline-block;
          }
          .nav-link:hover {
            color: var(--text);
            transform: scale(1.08);
          }
          .art-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
            padding: 20px 0;
            border-bottom: 1px solid var(--border);
            text-decoration: none;
            transition: transform 0.2s;
          }
          .art-row:hover {
            transform: translateX(6px);
          }
          .art-row:hover .art-title {
            color: var(--text);
          }
          .art-title {
            font-size: 15px;
            color: var(--text-mid);
            line-height: 1.45;
            margin-bottom: 8px;
            transition: color 0.2s;
          }
          .proj-card {
            background: var(--bg-2);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 20px;
            transition: border-color 0.2s, transform 0.2s;
            cursor: pointer;
          }
          .proj-card:hover {
            border-color: #555;
            transform: translateY(-3px);
          }
          .btn-primary {
            font-size: 12px;
            padding: 9px 20px;
            border-radius: 8px;
            background: var(--text);
            color: var(--bg);
            font-weight: 500;
            transition: transform 0.2s, opacity 0.2s;
            display: inline-block;
          }
          .btn-primary:hover {
            transform: scale(1.05);
            opacity: 0.9;
          }
          .btn-secondary {
            font-size: 12px;
            padding: 9px 20px;
            border-radius: 8px;
            color: var(--text-muted);
            border: 1px solid var(--border-2);
            transition: transform 0.2s, border-color 0.2s;
            display: inline-block;
          }
          .btn-secondary:hover {
            transform: scale(1.05);
            border-color: #555;
          }
          .skill-tag {
            font-size: 11px;
            color: #888;
            background: var(--bg-3);
            border: 1px solid var(--border-2);
            padding: 4px 10px;
            border-radius: 20px;
            transition: border-color 0.2s, color 0.2s, transform 0.2s;
            display: inline-block;
          }
          .skill-tag:hover {
            border-color: #555;
            color: var(--text);
            transform: scale(1.08);
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}