import Link from "next/link";

export default function Page() {
  return (
    <main
      style={{
        background: "linear-gradient(135deg, #1E3A8A, #3B82F6, #93C5FD)",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        color: "#0B1F3A",
      }}
    >
      <h1
        style={{
          fontSize: "52px",
          fontWeight: "900",
          marginBottom: "30px",
          color: "#FACC15", // gold accent (lion vibe)
          textShadow: "3px 3px 0px #0B1F3A",
        }}
      >
        🦁 Welcome to the Lion Den!
        <br />
        <span style={{ fontSize: "28px", fontWeight: "600", color: "#E0F2FE" }}>
          6th, 7th, and 8th Graders
        </span>
      </h1>

      <div
        style={{
          display: "grid",
          gap: "20px",
          maxWidth: "600px",
        }}
      >
        {/* What We've Learned */}
        <Link
          href="/learned"
          style={{
            display: "block",
            padding: "22px",
            borderRadius: "14px",
            backgroundColor: "#DBEAFE",
            fontWeight: "bold",
            fontSize: "22px",
            color: "#1E3A8A",
            textDecoration: "none",
            boxShadow: "4px 4px 0px #1E3A8A",
          }}
        >
          📘 What We&apos;ve Learned
        </Link>

        {/* Check Understanding */}
        <Link
          href="/check"
          style={{
            display: "block",
            padding: "22px",
            borderRadius: "14px",
            backgroundColor: "#93C5FD",
            fontWeight: "bold",
            fontSize: "22px",
            color: "#0B1F3A",
            textDecoration: "none",
            boxShadow: "4px 4px 0px #1E40AF",
          }}
        >
          ✅ Check Your Understanding
        </Link>

        {/* Final Projects */}
        <Link
          href="/projects"
          style={{
            display: "block",
            padding: "22px",
            borderRadius: "14px",
            backgroundColor: "#2563EB",
            fontWeight: "bold",
            fontSize: "22px",
            color: "white",
            textDecoration: "none",
            boxShadow: "4px 4px 0px #1E3A8A",
          }}
        >
          🦁 Final Projects
        </Link>

        {/* How Ms. Xu Made This */}
        <Link
          href="/how-to"
          style={{
            display: "block",
            padding: "22px",
            borderRadius: "14px",
            backgroundColor: "#1E40AF",
            fontWeight: "bold",
            fontSize: "22px",
            color: "#E0F2FE",
            textDecoration: "none",
            boxShadow: "4px 4px 0px #0B1F3A",
          }}
        >
          🤔 How did Ms. Xu Make This Website?
        </Link>
      </div>
    </main>
  );
}
