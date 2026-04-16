import Link from "next/link";

export default function Page() {
  return (
    <main
      style={{
        background: "linear-gradient(135deg, #FFE9AE, #B4F4FF, #FFB4E6)",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "900",
          marginBottom: "20px",
          color: "#222",
          textShadow: "2px 2px 0px white",
        }}
      >
        Hi! Welcome 6th, 7th, and 8th Graders!!
      </h1>

      <div
        style={{
          display: "grid",
          gap: "20px",
          maxWidth: "600px",
        }}
      >
        {/* 1. What We've Learned */}
        <Link
          href="/learned"
          style={{
            display: "block",
            padding: "20px",
            borderRadius: "12px",
            backgroundColor: "#FFEB3B",
            fontWeight: "bold",
            fontSize: "22px",
            color: "#333",
            textDecoration: "none",
          }}
        >
          📘 What We&apos;ve Learned
        </Link>

        {/* 1. What We've Learned */}
        <Link
          href="/check"
          style={{
            display: "block",
            padding: "20px",
            borderRadius: "12px",
            backgroundColor: "#FFA500",
            fontWeight: "bold",
            fontSize: "22px",
            color: "#333",
            textDecoration: "none",
          }}
        >
          ✅ Check Your Understanding
        </Link>

        {/* 2. Final Projects */}
        <Link
          href="/projects"
          style={{
            display: "block",
            padding: "20px",
            borderRadius: "12px",
            backgroundColor: "#E91E63",
            fontWeight: "bold",
            fontSize: "22px",
            color: "white",
            textDecoration: "none",
          }}
        >
          🚀 Final Projects
        </Link>

        {/* 3. About Our Community */}

        {/* 5. How did Ms. Xu MAke This Website */}
        <Link
          href="/how-to"
          style={{
            display: "block",
            padding: "20px",
            borderRadius: "12px",
            backgroundColor: "#2196F3",
            fontWeight: "bold",
            fontSize: "22px",
            color: "white",
            textDecoration: "none",
          }}
        >
          🤔 How did Ms. Xu Make This Website?
        </Link>
        <br></br>
      </div>
    </main>
  );
}
