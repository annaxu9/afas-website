"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { StudentProjectSlider } from "../components/StudentProjectSlider";

type Grade = "8" | "7" | "6";

interface StudentProject {
  id: string;
  grade: Grade;
  first_name: string;
  image_srcs: string[];
  clicks: number;
}

const handyLinkStyle: React.CSSProperties = {
  padding: "8px 14px",
  background: "#f7f7f7",
  borderRadius: "999px",
  textDecoration: "none",
  fontSize: "16px",
  color: "#333",
  fontWeight: 600,
  border: "1px solid #ddd",
};

export default function ProjectsPage() {
  const grades: Grade[] = ["8", "7", "6"];
  const [projects, setProjects] = useState<StudentProject[]>([]);

  async function loadProjects() {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("clicks", { ascending: false });

    console.log("SUPABASE URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
    console.log("SUPABASE DATA:", data);
    console.log("SUPABASE ERROR:", error);

    if (!error && data) {
      setProjects(data as StudentProject[]);
    }
  }

  useEffect(() => {
    loadProjects();
  }, []);

  async function handleProjectClick(projectId: string) {
    console.log("CLICK:", projectId);

    const res = await fetch(`/api/projects/${projectId}/click`, {
      method: "POST",
    });

    const data = await res.json();
    console.log("RESPONSE:", data);

    // reload projects so UI updates
    await loadProjects();
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(135deg, #0E3A68, #1E5AA8, #A7C7FF)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          width: "100%",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            fontWeight: 900,
            marginBottom: "10px",
            color: "#123C73",
          }}
        >
          🦁 AFAS Final Projects Gallery
        </h1>

        <p
          style={{
            fontSize: "20px",
            marginBottom: "18px",
            lineHeight: 1.6,
            color: "#555",
          }}
        >
          Take a look at the amazing final projects from{" "}
          <strong>8th, 7th, and 6th grade</strong> students in Digital Literacy
          and Computer Science.
        </p>

        <div
          style={{
            marginBottom: "24px",
            padding: "14px 16px",
            borderRadius: "16px",
            background: "#eef4ff",
            border: "1px solid #b7cdf7",
          }}
        >
          <p
            style={{
              margin: "0 0 10px",
              fontWeight: 700,
              fontSize: "18px",
              color: "#123C73",
            }}
          >
            🔗 Jump to a Grade
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <a href="#grade-8" style={handyLinkStyle}>
              8th Grade
            </a>
            <a href="#grade-7" style={handyLinkStyle}>
              7th Grade
            </a>
            <a href="#grade-6" style={handyLinkStyle}>
              6th Grade
            </a>
          </div>
        </div>

        {grades.map((grade) => {
          const projectsForGrade = projects.filter((p) => p.grade === grade);

          return (
            <section
              key={grade}
              id={`grade-${grade}`}
              style={{ marginTop: "30px" }}
            >
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 800,
                  marginBottom: "12px",
                  color: "#123C73",
                }}
              >
                🖼️ {grade}th Grade Projects
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "18px",
                }}
              >
                {projectsForGrade.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => handleProjectClick(project.id)}
                    style={{
                      background: "#fafafa",
                      borderRadius: "16px",
                      padding: "10px",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "100%",
                      maxWidth: "400px",
                      border: "2px solid #d7a928",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "8px",
                        fontWeight: 700,
                        color: "#123C73",
                      }}
                    >
                      <span>#{index + 1}</span>
                      <span>{project.clicks} clicks</span>
                    </div>

                    <div
                      style={{
                        width: "100%",
                        borderRadius: "12px",
                        overflow: "hidden",
                        border: "1px solid #ddd",
                        marginBottom: "8px",
                      }}
                    >
                      <StudentProjectSlider images={project.image_srcs} />
                    </div>

                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: 700,
                        textAlign: "center",
                        color: "#333",
                      }}
                    >
                      {project.first_name}
                    </div>
                  </button>
                ))}
              </div>
            </section>
          );
        })}

        <div style={{ marginTop: "32px" }}>
          <Link
            href="/"
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              textDecoration: "none",
              color: "#123C73",
            }}
          >
            ⬅ Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
