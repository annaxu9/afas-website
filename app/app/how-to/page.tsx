// app/how-i-made-this/page.tsx
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
          👩‍💻 Step 1: Experience + Practice
        </h2>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          Ms. Xu has been making websites for over <strong>4 years</strong>.
          Because of that, building this website only took about{" "}
          <strong>a day</strong>. The hardest part was actually just
          screenshotting all of your projects!
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          This shows something important:{" "}
          <strong>practice makes perfect</strong>! The more you code, the faster
          and better you get.
        </p>

        <h2 style={{ fontSize: "28px", fontWeight: 800, marginTop: "24px" }}>
          🤖 Step 2: Using AI
        </h2>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          AI helped speed things up. It didn’t build the website by itself, but
          it helped write code faster, fix bugs, and explain ideas.
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          Think of AI like a <strong>super smart helper</strong>, not a
          replacement for learning.
        </p>

        <h2 style={{ fontSize: "28px", fontWeight: 800, marginTop: "24px" }}>
          🧠 Step 3: Writing Code in VS Code
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
          Developers love it because it’s <strong>free</strong>,{" "}
          <strong>fast</strong>, and <strong>reliable</strong>. We have been
          using a code editor too. It is built into Code.org and is made
          especially for people who are just beginning to learn how to code.
        </p>

        <h2 style={{ fontSize: "28px", fontWeight: 800, marginTop: "24px" }}>
          🗂️ Step 4: Saving the Code with GitHub
        </h2>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          After writing the code, it was saved on <strong>GitHub</strong>.
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
          ⚛️ Step 5: Using Next.js
        </h2>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          This website was built using a tool called <strong>Next.js</strong>.
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          Next.js is a framework built on top of another tool called{" "}
          <strong>React</strong>.
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          A framework gives you a lot of helpful tools so you don’t have to
          start from scratch every time.
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          It gives more control than website builders like Wix or Squarespace,
          but it also takes more learning.
        </p>

        <h2 style={{ fontSize: "28px", fontWeight: 800, marginTop: "24px" }}>
          🚀 Step 6: Putting the Website Online
        </h2>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          After the website was finished, it was put online using{" "}
          <strong>Vercel</strong>.
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          Vercel is a platform that lets you deploy websites so anyone can visit
          them.
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          The best part? It’s <strong>free</strong> for projects like this.
        </p>

        <h2 style={{ fontSize: "28px", fontWeight: 800, marginTop: "24px" }}>
          ⭐ Final Message
        </h2>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          You don’t need to know everything to start coding.
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          Start small, practice a lot, and don’t be afraid to ask for help —
          from teachers, friends, or online resources.
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
