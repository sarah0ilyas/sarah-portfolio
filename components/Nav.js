export default function Nav() {
  return (
    <nav style={{
      borderBottom: "1px solid var(--border)",
      padding: "0 4rem",
      height: 64,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      maxWidth: 1280,
      margin: "0 auto",
    }}>
      <a href="/" style={{ fontSize: 15, fontWeight: 500, letterSpacing: "-0.02em", color: "var(--text)" }}>
        Sarah Ilyas
      </a>
      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        <a href="/articles" className="nav-link">Articles</a>
        <a href="/projects" className="nav-link">Projects</a>
        <a href="/about" className="nav-link">About</a>
        <a href="https://www.linkedin.com/in/sarahilyas/" target="_blank" className="nav-link">LinkedIn</a>
        <a href="mailto:sarahilyas8@gmail.com" style={{ fontSize: 12, padding: "7px 16px", borderRadius: 8, background: "var(--text)", color: "var(--bg)", fontWeight: 500 }}>
          Get in touch
        </a>
      </div>
    </nav>
  );
}