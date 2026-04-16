"use client";

import Link from "next/link";

export default function HowIMadeThisPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(135deg, #E3F2FD, #FFF9C4)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "32px",
          borderRadius: "20px",
          width: "100%",
          boxShadow: "0 6px 14px rgba(0,0,0,0.1)",
          color: "#333",
        }}
      >
        <h1 style={{ fontSize: "40px", fontWeight: 900, marginBottom: "12px" }}>
          💻 How I Made This Website
        </h1>

        <p style={{ fontSize: "20px", lineHeight: 1.6, marginBottom: "20px" }}>
          This page explains how this website was made — in a way that makes
          sense for middle schoolers 🙂
        </p>

        <hr style={{ margin: "24px 0" }} />

        <h2 style={{ fontSize: "28px", fontWeight: 800 }}>
          👩‍💻 Step 1: Starting with an Earlier Website
        </h2>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          In the fall, Ms. Xu made a website for the{" "}
          <strong>
            <a
              href="https://escsisthebest.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1E5AA8", textDecoration: "underline" }}
            >
              East Somerville Community School
            </a>
          </strong>
          .
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          That earlier website helped a lot because it gave practice with how to
          organize pages, show student work, and put a real website online.
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          This is something programmers do all the time: they build one project,
          learn from it, and then use those ideas again to build the next one
          faster and better.
        </p>

        <h2 style={{ fontSize: "28px", fontWeight: 800, marginTop: "24px" }}>
          🧠 Step 2: Practice Makes Things Easier
        </h2>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          Ms. Xu has been making websites for over <strong>4 years</strong>.
          Because of that, building this website was much faster than it would
          have been in the beginning.
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          The hardest part was actually collecting and organizing all of the
          project images.
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          This shows something important:{" "}
          <strong>practice makes progress</strong>. The more you code, the more
          patterns you start to recognize.
        </p>

        <h2 style={{ fontSize: "28px", fontWeight: 800, marginTop: "24px" }}>
          🤖 Step 3: Using AI as a Helper
        </h2>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          AI helped speed things up. It did not build the website by itself, but
          it helped write code faster, fix bugs, and explain ideas.
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          Think of AI like a <strong>smart helper</strong>, not a replacement
          for learning how things work.
        </p>

        <h2 style={{ fontSize: "28px", fontWeight: 800, marginTop: "24px" }}>
          🧠 Step 4: Writing Code in VS Code
        </h2>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          The website was written using a program called{" "}
          <strong>Visual Studio Code (VS Code)</strong>.
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          VS Code is a <strong>code editor</strong>. That means it’s where
          programmers write and organize their code.
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          Developers like it because it is <strong>free</strong>,{" "}
          <strong>fast</strong>, and <strong>reliable</strong>. You have been
          using a code editor too inside Code.org. That editor is made
          especially for beginners.
        </p>

        <h2 style={{ fontSize: "28px", fontWeight: 800, marginTop: "24px" }}>
          🗂️ Step 5: Saving the Code with GitHub
        </h2>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          After writing the code, it was saved on{" "}
          <strong>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1E5AA8", textDecoration: "underline" }}
            >
              GitHub
            </a>
          </strong>
          .
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          GitHub is like a <strong>safe online folder</strong> for code. It
          helps you:
        </p>
        <ul style={{ fontSize: "18px", lineHeight: 1.6, marginTop: "8px" }}>
          <li>save your work so you don’t lose it</li>
          <li>go back to older versions if you make a mistake</li>
          <li>share code with other people and work as a team</li>
        </ul>

        <h2 style={{ fontSize: "28px", fontWeight: 800, marginTop: "24px" }}>
          ⚛️ Step 6: Building the Website with Next.js
        </h2>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          This website was built using a tool called{" "}
          <strong>
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1E5AA8", textDecoration: "underline" }}
            >
              Next.js
            </a>
          </strong>
          .
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          Next.js is a framework built on top of another tool called{" "}
          <strong>
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1E5AA8", textDecoration: "underline" }}
            >
              React
            </a>
          </strong>
          .
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          A framework gives you helpful tools so you do not have to start from
          scratch every time.
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          It gives more control than website builders like Wix or Squarespace,
          but it also takes more learning.
        </p>

        <h2 style={{ fontSize: "28px", fontWeight: 800, marginTop: "24px" }}>
          🗄️ Step 7: Adding Supabase
        </h2>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          Later, Ms. Xu added{" "}
          <strong>
            <a
              href="https://supabase.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1E5AA8", textDecoration: "underline" }}
            >
              Supabase
            </a>
          </strong>{" "}
          to this website.
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          Supabase is a tool that helps websites store information in a
          database.
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          In this website, Supabase helps keep track of things like{" "}
          <strong>project clicks and rankings</strong>. That means if someone
          visits a project, the website can remember it even after the page is
          refreshed.
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          Without a database, the website could show pictures, but it would not
          remember which projects were getting the most attention.
        </p>

        <h2 style={{ fontSize: "28px", fontWeight: 800, marginTop: "24px" }}>
          🚀 Step 8: Putting the Website Online
        </h2>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          After the website was finished, it was put online using{" "}
          <strong>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1E5AA8", textDecoration: "underline" }}
            >
              Vercel
            </a>
          </strong>
          .
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          Vercel is a platform that lets you deploy websites so anyone can visit
          them on the internet.
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          The best part is that it can be <strong>free</strong> for projects
          like this.
        </p>

        <h2 style={{ fontSize: "28px", fontWeight: 800, marginTop: "24px" }}>
          ⭐ Final Message
        </h2>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          You do not need to know everything to start coding.
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          Start small, practice a lot, and do not be afraid to ask for help —
          from teachers, friends, or online resources.
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          One project can lead to the next. That is exactly how this website was
          made.
        </p>

        <div style={{ marginTop: "32px" }}>
          <Link
            href="/"
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              textDecoration: "none",
              color: "black",
            }}
          >
            ⬅ Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
