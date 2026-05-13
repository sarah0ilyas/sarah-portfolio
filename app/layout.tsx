import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sarah Ilyas — ML Engineer",
  description: "ML Engineer building production forecasting systems. Writing about MLOps, time series ML, and uncertainty quantification.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}