"use client";

import Link from "next/link";
import { PaperTowerSlider } from "../components/PaperTowerSlider";
import Image from "next/image";

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

const lesson6Images = Array.from(
  { length: 5 },
  (_, i) => `/images/lesson6-${i + 1}.png`,
);

export default function LearnedPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(135deg, #FFF8A6, #FFD1DC, #B3E5FC)",
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
        {/* Title & Intro */}
        <h1
          style={{
            fontSize: "40px",
            fontWeight: 900,
            marginBottom: "10px",
            color: "#222",
          }}
        >
          📘 What We&apos;ve Learned
        </h1>

        <p
          style={{
            fontSize: "20px",
            marginBottom: "18px",
            lineHeight: 1.6,
            color: "#555",
          }}
        >
          This page shows some of the awesome things you&apos;ve learned this
          year in Digital Literacy and Computer Science with Ms. Xu!
        </p>

        {/* Handy Links / Table of Contents */}
        <div
          style={{
            marginBottom: "24px",
            padding: "14px 16px",
            borderRadius: "16px",
            background: "#fdf7e3",
            border: "1px solid #f0e0a0",
          }}
        >
          <p
            style={{
              margin: "0 0 10px",
              fontWeight: 700,
              fontSize: "18px",
              color: "#444",
            }}
          >
            🔗 Handy Links (Click to Jump)
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <a href="#paper-towers" style={handyLinkStyle}>
              🏗️ Paper Tower Challenge
            </a>
            <a href="#problem-solving" style={handyLinkStyle}>
              🧠 Problem Solving Probess
            </a>
            <a href="#code-org" style={handyLinkStyle}>
              💻 Code.org
            </a>
            <a href="#lesson3" style={handyLinkStyle}>
              ✏️ Lesson 3: Drawing in Game Lab
            </a>
            <a href="#lesson4" style={handyLinkStyle}>
              🔺 Lesson 4: Shapes &amp; Parameters
            </a>
            <a href="#play" style={handyLinkStyle}>
              🎭 Computer Vocabulary Play
            </a>
            <a href="#variables" style={handyLinkStyle}>
              🔤 Lesson 5: Variables
            </a>
            <a href="#robot-faces" style={handyLinkStyle}>
              🤖 Robot Faces (Final Project)
            </a>
            <a href="#other" style={handyLinkStyle}>
              🌍 Other Topics
            </a>
          </div>
        </div>

        {/* Content */}
        <div
          style={{
            fontSize: "20px",
            lineHeight: 1.8,
            color: "#444",
          }}
        >
          {/* Paper Towers */}
          <h2
            id="paper-towers"
            style={{ fontSize: "28px", fontWeight: 800, marginTop: "10px" }}
          >
            🏗️ Paper Tower Challenge
          </h2>
          <p>
            We started Quarter 3 with a hands–on engineering challenge: build
            the tallest paper tower using only paper and tape! Everyone did an
            awesome job and showed creativity, teamwork, and persistence.
          </p>
          <p>
            Yasmim, Cece, and Isabella in 7th Grade built the highest tower at
            59 inches!
          </p>
          <PaperTowerSlider />
          <p></p>
          <hr
            style={{
              border: "0",
              borderTop: "4px solid #333", // bold line
              margin: "30px 0", // vertical padding
            }}
          />
          <h2
            id="problem-solving"
            style={{ fontSize: "28px", fontWeight: 800, marginTop: "30px" }}
          >
            🧠 The Problem-Solving Process
          </h2>
          <p>
            Next, we learned about the steps engineers use to solve real-world
            problems. We watched a short video together and explored the four
            parts of the process.
          </p>
          {/* Side-by-side: image + steps */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              margin: "20px 0",
              flexWrap: "wrap", // makes it responsive
            }}
          >
            {/* Image */}
            <div
              style={{
                flex: "1 1 300px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                padding: "10px",
              }}
            >
              <img
                src="/images/problemsolvingprocess.png"
                alt="Problem Solving Process Diagram"
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  height: "auto",
                }}
              />
            </div>

            {/* Steps */}
            <div style={{ flex: "1 1 300px" }}>
              <h2
                style={{
                  fontWeight: "900",
                }}
              >
                The 4 steps:
              </h2>
              <ul style={{ paddingLeft: "20px", marginTop: 0 }}>
                <li>
                  🔎 <strong>Define</strong> — What is the problem?
                </li>
                <li>
                  🧰 <strong>Prepare</strong> — Make a plan to solve it.
                </li>
                <li>
                  🛠️ <strong>Try</strong> — Build, create, and test your idea.
                </li>
                <li>
                  🔁 <strong>Reflect</strong> — What worked? What can you
                  improve?
                </li>
              </ul>
            </div>
          </div>
          <h2
            style={{
              textAlign: "center",
              fontWeight: "900",
            }}
          >
            Video:
          </h2>
          {/* Embedded YouTube Video with real dimensions */}
          <div
            style={{
              width: "560px", // YouTube default width
              height: "315px", // YouTube default height (keeps ratio)
              maxWidth: "100%", // keeps it responsive on small screens
              margin: "20px auto", // center the video
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/z7RaFPT3DTE"
              title="Problem Solving Process Video"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            ></iframe>
          </div>
          <hr
            style={{
              border: "0",
              borderTop: "4px solid #333", // bold line
              margin: "30px 0", // vertical padding
            }}
          />
          {/* Code.org Intro */}
          <h2
            id="code-org"
            style={{ fontSize: "28px", fontWeight: 800, marginTop: "30px" }}
          >
            💻 Unit 1: Exploring Code.org (Games and Animations)
          </h2>
          <p>
            Then we jumped into{" "}
            <a
              href="https://code.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#0070f3",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              Code.org
            </a>{" "}
            — a website where you can learn to code by making games, art,
            animations, and music.
          </p>
          <hr
            style={{
              border: "0",
              borderTop: "4px solid #333", // bold line
              margin: "30px 0", // vertical padding
            }}
          />
          {/* Lesson 3 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
              marginTop: "30px",
            }}
          >
            {/* Left side: lesson text */}
            <div style={{ flex: 2 }}>
              <h2
                id="lesson3"
                style={{ fontSize: "28px", fontWeight: 800, marginTop: 0 }}
              >
                ✏️ Lesson 3 — Drawing in Game Lab
              </h2>

              <p>
                We explored the layout of Code.org Game Lab: the{" "}
                <strong>workspace</strong>, the <strong>canvas/grid</strong>,
                the <strong>toolbox</strong>, the <strong>Run Button</strong>,
                and the <strong>Progress Bar</strong>.
              </p>

              <p>
                We learned that the Game Lab canvas is a{" "}
                <strong>400 by 400 grid</strong>. Each little square is 50 units
                that helps you measure where to draw things.
              </p>

              <p>We used functions like:</p>

              <ul style={{ paddingLeft: "25px" }}>
                <li>
                  <code>rect()</code> — to draw rectangles
                </li>
                <li>
                  <code>ellipse()</code> — to draw circles and ovals
                </li>
                <li>
                  <code>fill()</code> — to change colors
                </li>
              </ul>

              <p style={{ fontWeight: "bold", color: "#000" }}>
                👉 We learned that code order matters!
              </p>
            </div>

            {/* Right side: image */}
            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                src="/images/lesson_3.png"
                alt="Lesson 3 Drawing in Game Lab"
                width={300}
                height={300}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "12px",
                }}
                unoptimized
              />
            </div>
          </div>
          <hr
            style={{
              border: "0",
              borderTop: "4px solid #333",
              margin: "30px 0",
            }}
          />
          {/* Lesson 4 */}
          <div style={{ marginTop: "30px" }}>
            <h2
              id="lesson4"
              style={{
                fontSize: "28px",
                fontWeight: 800,
                marginBottom: "16px",
              }}
            >
              🔺 Lesson 4 — Shapes &amp; Parameters
            </h2>

            <p>
              In Game Lab, we use code to tell the computer what to draw. But
              the computer needs details, too!
            </p>

            <p>
              Those details are called <strong>parameters</strong>. Parameters
              tell the computer things like:
            </p>

            <ul style={{ paddingLeft: "25px", lineHeight: "1.8" }}>
              <li>Where should the shape go?</li>
              <li>How wide should it be?</li>
              <li>How tall should it be?</li>
            </ul>

            <p>For example, this code draws a rectangle:</p>

            <div
              style={{
                background: "#f4f4f4",
                borderRadius: "12px",
                padding: "18px 22px",
                margin: "18px 0",
                fontSize: "22px",
                fontWeight: "bold",
                textAlign: "center",
                fontFamily: "monospace",
              }}
            >
              rect(
              <span style={{ color: "#d62828" }}>100</span>,{" "}
              <span style={{ color: "#1d4ed8" }}>200</span>,{" "}
              <span style={{ color: "#15803d" }}>50</span>,{" "}
              <span style={{ color: "#9333ea" }}>80</span>
              );
            </div>

            <p>Each number gives the computer one important instruction:</p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "12px",
                margin: "18px 0",
              }}
            >
              <div
                style={{
                  background: "#fff1f2",
                  borderRadius: "10px",
                  padding: "14px",
                }}
              >
                <strong style={{ color: "#d62828" }}>100</strong>
                <div>
                  Moves the rectangle across the screen. (Along the X Axis)
                </div>
              </div>

              <div
                style={{
                  background: "#eff6ff",
                  borderRadius: "10px",
                  padding: "14px",
                }}
              >
                <strong style={{ color: "#1d4ed8" }}>200</strong>
                <div>
                  Moves the rectangle down the screen. (Along the Y Axis)
                </div>
              </div>

              <div
                style={{
                  background: "#f0fdf4",
                  borderRadius: "10px",
                  padding: "14px",
                }}
              >
                <strong style={{ color: "#15803d" }}>50</strong>
                <div>Sets the rectangle&apos;s width.</div>
              </div>

              <div
                style={{
                  background: "#faf5ff",
                  borderRadius: "10px",
                  padding: "14px",
                }}
              >
                <strong style={{ color: "#9333ea" }}>80</strong>
                <div>Sets the rectangle&apos;s height.</div>
              </div>
            </div>

            <p
              style={{
                fontWeight: "bold",
                background: "#fff7ed",
                padding: "14px 18px",
                borderRadius: "10px",
                marginTop: "20px",
              }}
            >
              👉 Change the parameters, and you change your drawing! You can
              move shapes, make them bigger or smaller, and create your own
              designs.
            </p>
          </div>
          <hr
            style={{
              border: "0",
              borderTop: "4px solid #333",
              margin: "30px 0",
            }}
          />
          {/* Lesson 5 */}
          <div style={{ marginTop: "30px" }}>
            <h2
              id="variables"
              style={{
                fontSize: "28px",
                fontWeight: 800,
                marginBottom: "16px",
              }}
            >
              🔤 Lesson 5 — Variables
            </h2>

            <p>
              In Game Lab, a <strong>variable</strong> is like a{" "}
              <strong>labeled box</strong> that stores information.
            </p>

            <p>
              The label tells us what is inside the box, and the value inside
              can change while the program is running.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: "12px",
                margin: "20px 0",
              }}
            >
              <div
                style={{
                  background: "#eff6ff",
                  borderRadius: "10px",
                  padding: "14px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "24px", marginBottom: "6px" }}>🏆</div>
                <strong>score</strong>
                <div style={{ marginTop: "6px" }}>Stores points</div>
              </div>

              <div
                style={{
                  background: "#fef3c7",
                  borderRadius: "10px",
                  padding: "14px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "24px", marginBottom: "6px" }}>🎨</div>
                <strong>color</strong>
                <div style={{ marginTop: "6px" }}>Stores a color</div>
              </div>

              <div
                style={{
                  background: "#f0fdf4",
                  borderRadius: "10px",
                  padding: "14px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "24px", marginBottom: "6px" }}>📏</div>
                <strong>size</strong>
                <div style={{ marginTop: "6px" }}>Stores a number</div>
              </div>
            </div>

            <p>For example, this variable stores a player&apos;s score:</p>

            <div
              style={{
                background: "#f4f4f4",
                borderRadius: "12px",
                padding: "18px 22px",
                margin: "18px 0",
                fontSize: "22px",
                fontWeight: "bold",
                textAlign: "center",
                fontFamily: "monospace",
              }}
            >
              var <span style={{ color: "#1d4ed8" }}>score</span> ={" "}
              <span style={{ color: "#15803d" }}>0</span>;
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "12px",
                margin: "18px 0",
              }}
            >
              <div
                style={{
                  background: "#eff6ff",
                  borderRadius: "10px",
                  padding: "14px",
                }}
              >
                <strong style={{ color: "#1d4ed8" }}>score</strong>
                <div>The name of the variable, or the label on the box.</div>
              </div>

              <div
                style={{
                  background: "#f0fdf4",
                  borderRadius: "10px",
                  padding: "14px",
                }}
              >
                <strong style={{ color: "#15803d" }}>0</strong>
                <div>The value stored inside the variable.</div>
              </div>
            </div>

            <p>Later, the score can change:</p>

            <div
              style={{
                background: "#f4f4f4",
                borderRadius: "12px",
                padding: "18px 22px",
                margin: "18px 0",
                fontSize: "22px",
                fontWeight: "bold",
                textAlign: "center",
                fontFamily: "monospace",
              }}
            >
              <span style={{ color: "#1d4ed8" }}>score</span> ={" "}
              <span style={{ color: "#15803d" }}>10</span>;
            </div>

            <p
              style={{
                fontWeight: "bold",
                background: "#fff7ed",
                padding: "14px 18px",
                borderRadius: "10px",
                marginTop: "20px",
              }}
            >
              👉 Variables help our programs remember information that can
              change, like a player&apos;s score, a character&apos;s size, or
              the color of a shape.
            </p>
          </div>
          <hr
            style={{
              border: "0",
              borderTop: "4px solid #333",
              margin: "30px 0",
            }}
          />
          {/* Lesson 6 */}
          <div style={{ marginTop: "30px" }}>
            <h2
              id="randomNumbers"
              style={{
                fontSize: "28px",
                fontWeight: 800,
                marginBottom: "16px",
              }}
            >
              🎲 Lesson 6 — Random Numbers
            </h2>

            <p>
              Sometimes we want our programs to look different each time they
              run. In Game Lab, we can use <strong>randomNumber()</strong> to
              let the computer choose a surprise number for us.
            </p>

            <p>
              The computer needs to know the <strong>smallest</strong> and{" "}
              <strong>largest</strong> numbers it can choose. For example:
            </p>

            <div
              style={{
                background: "#f4f4f4",
                borderRadius: "12px",
                padding: "18px 22px",
                margin: "18px 0",
                fontSize: "22px",
                fontWeight: "bold",
                textAlign: "center",
                fontFamily: "monospace",
              }}
            >
              var <span style={{ color: "#1d4ed8" }}>x</span> = randomNumber(
              <span style={{ color: "#15803d" }}>0</span>,{" "}
              <span style={{ color: "#9333ea" }}>400</span>);
            </div>

            <p>
              This code creates a variable called <strong>x</strong>. The
              computer puts a random number from <strong>0 to 400</strong>{" "}
              inside it.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: "12px",
                margin: "18px 0 26px",
              }}
            >
              <div
                style={{
                  background: "#eff6ff",
                  borderRadius: "10px",
                  padding: "14px",
                  textAlign: "center",
                }}
              >
                <strong style={{ color: "#1d4ed8" }}>x</strong>
                <div style={{ marginTop: "6px" }}>Stores the random number</div>
              </div>

              <div
                style={{
                  background: "#f0fdf4",
                  borderRadius: "10px",
                  padding: "14px",
                  textAlign: "center",
                }}
              >
                <strong style={{ color: "#15803d" }}>0</strong>
                <div style={{ marginTop: "6px" }}>Smallest possible number</div>
              </div>

              <div
                style={{
                  background: "#faf5ff",
                  borderRadius: "10px",
                  padding: "14px",
                  textAlign: "center",
                }}
              >
                <strong style={{ color: "#9333ea" }}>400</strong>
                <div style={{ marginTop: "6px" }}>Largest possible number</div>
              </div>
            </div>

            <p>
              We can use random numbers to place shapes in surprise spots on the
              canvas:
            </p>

            <div
              style={{
                background: "#f4f4f4",
                borderRadius: "12px",
                padding: "18px 22px",
                margin: "18px 0",
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
                fontFamily: "monospace",
                lineHeight: "1.8",
              }}
            >
              var x = randomNumber(0, 400);
              <br />
              var y = randomNumber(0, 400);
              <br />
              ellipse(x, y, 30, 30);
            </div>

            <p style={{ fontWeight: "bold", marginBottom: "12px" }}>
              This code could create many different results:
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                flexWrap: "wrap",
                margin: "16px 0 22px",
              }}
            >
              {lesson6Images.map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt={`Possible random output ${index + 1}`}
                  width={140}
                  height={140}
                  style={{
                    width: "110px",
                    height: "auto",
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                  }}
                  unoptimized
                />
              ))}
            </div>

            <p>
              Each time the program runs, the circle may appear in a new place
              because <strong>x</strong> and <strong>y</strong> can get
              different random numbers.
            </p>

            <p
              style={{
                fontWeight: "bold",
                background: "#fff7ed",
                padding: "14px 18px",
                borderRadius: "10px",
                marginTop: "20px",
              }}
            >
              👉 Random numbers make our programs surprising and fun! They can
              help us make different designs each time we press Run.
            </p>
          </div>
          <hr
            style={{
              border: "0",
              borderTop: "4px solid #333",
              margin: "30px 0",
            }}
          />
          {/* Robot Faces Final Project */}
          <h2
            id="robot-faces"
            style={{ fontSize: "28px", fontWeight: 800, marginTop: "30px" }}
          >
            🤖 Robot Faces — Final Project
          </h2>
          <p>
            For our final Code.org project, we created{" "}
            <strong>Robot Faces</strong> in Game Lab! Students designed their
            own robot character and showed off both coding skills and
            creativity.
          </p>
          <p style={{ fontWeight: "bold", color: "#000", marginTop: "10px" }}>
            Project Requirements:
          </p>
          <ul style={{ paddingLeft: "25px" }}>
            <li>
              ✅ Use <strong>3 unique commands</strong> (for example:{" "}
              <code>rect()</code>, <code>ellipse()</code>, <code>line()</code>,{" "}
              <code>triangle()</code>, <code>fill()</code>,{" "}
              <code>stroke()</code>)
            </li>
            <li>
              ✅ Use <strong>2 variables</strong> (for example:{" "}
              <code>eyeSize</code>, <code>headWidth</code>,{" "}
              <code>robotColor</code>)
            </li>
            <li>
              ✅ Use <strong>randomNumber()</strong> at least once to add a
              surprise element, such as a random color, shape size, or position
            </li>
            <li>
              ✅ Make it with <strong>creativity</strong> — unique styles, fun
              colors, interesting expressions, and cool details!
            </li>
            <li>
              See the projects here:{" "}
              <Link
                href="https://argenziano-is-the-goat.vercel.app/projects"
                target="_blank"
                rel="noopener noreferrer"
                style={handyLinkStyle}
              >
                🗂️ Student Projects Gallery
              </Link>
            </li>
          </ul>
          <hr
            style={{
              border: "0",
              borderTop: "4px solid #333",
              margin: "30px 0",
            }}
          />
          {/* Micro:bit Unit */}
          <div style={{ marginTop: "40px" }}>
            <h2
              id="microbit"
              style={{
                fontSize: "32px",
                fontWeight: 800,
                marginBottom: "8px",
              }}
            >
              🤖 Unit 2 — Exploring the Micro:bit
            </h2>

            <p
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#374151",
                marginTop: "0",
                marginBottom: "22px",
              }}
            >
              Computers are everywhere — even in places we may not expect!
            </p>

            <div>
              <p>
                We started our new unit by learning about the{" "}
                <strong>Micro:bit</strong>, a tiny computer that we can program
                to respond, light up, and interact with the world around us.
              </p>

              <p>
                At first, we might think a computer has to be a laptop, desktop,
                or tablet. But computers can also be found inside many everyday
                objects. A computer is a device that can follow instructions,
                take in information, and produce an output. The Micro:bit helped
                us see that computers do not have to be big.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "24px 0",
              }}
            >
              <Image
                src="/images/microbit.png"
                alt="Diagram showing parts of the Micro:bit"
                width={500}
                height={500}
                style={{
                  width: "80%",
                  maxWidth: "650px",
                  height: "auto",
                  borderRadius: "12px",
                  border: "2px solid #e5e7eb",
                  padding: "10px",
                }}
                unoptimized
              />
            </div>

            <div
              style={{
                background: "#eff6ff",
                borderRadius: "12px",
                padding: "18px 22px",
                margin: "22px 0",
              }}
            >
              <p style={{ fontWeight: "bold", marginTop: 0 }}>
                💡 We asked: What counts as a computer?
              </p>

              <p style={{ marginBottom: 0 }}>
                Not only are they are laptops, they can be inside traffic
                lights, video game controllers, watches, cars, washing machines,
                toys, and many other devices we use every day.
              </p>
            </div>

            <h3
              style={{
                fontSize: "22px",
                fontWeight: 700,
                marginTop: "28px",
                marginBottom: "14px",
              }}
            >
              What We Learned About the Micro:bit
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: "12px",
                margin: "18px 0",
              }}
            >
              <div
                style={{
                  background: "#f0fdf4",
                  borderRadius: "10px",
                  padding: "16px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "8px" }}>🧠</div>
                <strong>Tiny Computer</strong>
                <div style={{ marginTop: "6px" }}>
                  It follows the code that we create.
                </div>
              </div>

              <div
                style={{
                  background: "#fff7ed",
                  borderRadius: "10px",
                  padding: "16px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "8px" }}>💡</div>
                <strong>Lights &amp; Buttons</strong>
                <div style={{ marginTop: "6px" }}>
                  It can display images and respond when we press buttons.
                </div>
              </div>

              <div
                style={{
                  background: "#faf5ff",
                  borderRadius: "10px",
                  padding: "16px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "8px" }}>🧩</div>
                <strong>MakeCode</strong>
                <div style={{ marginTop: "6px" }}>
                  We used blocks to build programs for our Micro:bit.
                </div>
              </div>
            </div>

          </div>
          <hr
            style={{
              border: "0",
              borderTop: "4px solid #333",
              margin: "30px 0",
            }}
          />

          {/* Other Topics */}
          <h2
            id="other"
            style={{ fontSize: "28px", fontWeight: 800, marginTop: "30px" }}
          >
            🌍 Other Things We Learned
          </h2>
          <ul style={{ paddingLeft: "25px" }}>
            {/* Jobs in Tech */}
            <li>
              What a <strong>frontend engineer</strong> does — builds what you
              see on the screen (buttons, colors, layouts). This is what Ms. Xu
              used to do!
            </li>

            <li>
              What a <strong>backend engineer</strong> does — builds the
              behind-the-scenes code that stores data, sends information, and
              makes apps work.
            </li>

            <li>
              What a <strong>designer</strong> does — plans how things look and
              how users move through a website or app (colors, spacing, icons,
              layouts).
            </li>

            <li>
              We even met <strong>real software engineers</strong> who
              volunteered in our classroom and shared their experiences!
            </li>

            <hr
              style={{
                border: 0,
                borderTop: "2px solid #ccc",
                margin: "16px 0",
              }}
            />

            <li>
              How to improve typing speed on{" "}
              <a
                href="https://thetypingcat.com/typing-speed-test"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#0070f3",
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
              >
                Typing Cat
              </a>{" "}
              — practicing accuracy, finger placement, and WPM (words per
              minute).
            </li>

            <hr
              style={{
                border: 0,
                borderTop: "2px solid #ccc",
                margin: "16px 0",
              }}
            />

            {/* Computer Hardware */}
            <li>
              We learned some parts of a computer: the{" "}
              <strong>motherboard</strong> (the main circuit board),{" "}
              <strong>CPU or Central Processing Unit</strong> (the brain that
              processes the code), <strong>monitor</strong>
              (the screen), <strong>speakers</strong> (sound),{" "}
              <strong>microphone</strong>
              (recording), and <strong>keyboard</strong> (typing input).
            </li>

            <li>
              We learned what it means to <strong>run the code</strong> —
              telling the computer to execute the instructions you wrote.
            </li>
          </ul>
        </div>

        {/* Back link */}
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
