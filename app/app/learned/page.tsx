import Link from "next/link";
import { PaperTowerSlider } from "../components/PaperTowerSlider";

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
              🏗️ Paper Towers
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
            We started the year with a hands–on engineering challenge: build the
            tallest paper tower possible using only paper and tape! Everyone did
            an awesome job and showed creativity, teamwork, and persistence.
          </p>

          <PaperTowerSlider />

          <p>
            The final winner is still a little bit disputed! Mason, Jakhari, and
            Jaden&apos;s group built a tower that measured{" "}
            <strong>55 inches</strong>, while Sarah, Izzy, and Callie&apos;s
            group may have reached <strong>around 56 inches</strong>. We&apos;ll
            call it a tie! Great job to everyone who participated!
          </p>

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
            💻 Exploring Code.org
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
          <h2
            id="lesson3"
            style={{ fontSize: "28px", fontWeight: 800, marginTop: "30px" }}
          >
            ✏️ Lesson 3 — Drawing in Game Lab
          </h2>

          <p>
            We explored the layout of Code.org Game Lab: the{" "}
            <strong>workspace</strong>, the <strong>canvas/grid</strong>, the{" "}
            <strong>toolbox</strong>, the <strong>Run Button</strong>, and the{" "}
            <strong>Progress Bar</strong>.
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

          <hr
            style={{
              border: "0",
              borderTop: "4px solid #333", // bold line
              margin: "30px 0", // vertical padding
            }}
          />

          {/* Lesson 4 */}
          <h2
            id="lesson4"
            style={{ fontSize: "28px", fontWeight: 800, marginTop: "30px" }}
          >
            🔺 Lesson 4 — Shapes &amp; Parameters
          </h2>

          <p>
            We learned what <strong>parameters</strong> are — they are the{" "}
            <strong>details</strong> you give a command so the computer knows
            exactly what you want. Think of parameters like the instructions you
            give when ordering something:
          </p>

          <p>
            <em>
              “I want a rectangle at this spot, with this width, and this
              height.”
            </em>
          </p>

          <p>For example, this block of code draws a rectangle:</p>

          <p>
            <code>rect(100, 200, 50, 80);</code>
          </p>

          <p>Each number is a parameter:</p>

          <ul style={{ paddingLeft: "25px" }}>
            <li>
              <strong>100</strong> → how far across
            </li>
            <li>
              <strong>200</strong> → how far down
            </li>
            <li>
              <strong>50</strong> → width
            </li>
            <li>
              <strong>80</strong> → height
            </li>
          </ul>

          <p>
            When you change the parameters, you change the shape. That’s how you
            control <strong>size, position, and color</strong> in your drawings!
          </p>

          <hr
            style={{
              border: "0",
              borderTop: "4px solid #333", // bold line
              margin: "30px 0", // vertical padding
            }}
          />

          {/* Lesson 5 */}
          <h2
            id="variables"
            style={{ fontSize: "28px", fontWeight: 800, marginTop: "30px" }}
          >
            🔤 Lesson 5 — Variables
          </h2>

          <p>
            We learned that a <strong>variable</strong> is like a{" "}
            <strong>labeled box </strong>
            that stores information. The value inside the box can{" "}
            <strong>change</strong>.
          </p>

          <p>
            For example, a variable might store your score, a color, or the size
            of a shape. When the number or value changes, the program will
            automatically use the new value.
          </p>

          <p>
            We also learned about <strong>functions</strong>. A function is a{" "}
            <strong>set of instructions</strong> that does something — like a
            mini-program you can reuse over and over. Functions help keep your
            code neat, organized, and easy to read.
          </p>

          <p style={{ fontWeight: "bold", marginTop: "10px", color: "#000" }}>
            👉 Variables store data. Functions do actions.
          </p>

          <hr
            style={{
              border: "0",
              borderTop: "4px solid #333",
              margin: "30px 0",
            }}
          />

          {/* The Play */}
          <h2
            id="play"
            style={{ fontSize: "28px", fontWeight: 800, marginTop: "30px" }}
          >
            🎭 Inside the Computer — Our Classroom Play
          </h2>

          <p>
            This was one of our favorite activities of the year! We performed a
            whole play about what happens <strong>inside a computer</strong>.
            Every student became a different computer part, and together we
            acted out how information moves through a machine.
          </p>

          <p>Our characters included:</p>

          <ul style={{ paddingLeft: "25px" }}>
            <li>
              <strong>Narrator</strong> — tells the story and guides the scenes
            </li>
            <li>
              <strong>Ms. Xu</strong> — the teacher; calm, encouraging, and wise
            </li>
            <li>
              <strong>Mia</strong> — a curious and brave student
            </li>
            <li>
              <strong>Ben</strong> — a confident coder, sometimes impatient
            </li>
            <li>
              <strong>Sara</strong> — logical, observant, and great at noticing
              mistakes
            </li>

            <li>
              <strong>Hardware</strong> — the strong “body” of the computer
            </li>
            <li>
              <strong>Software</strong> — the smart “mind” of the computer
            </li>
            <li>
              <strong>Input</strong> — energetic and chatty
              (keyboard/microphone)
            </li>
            <li>
              <strong>Output</strong> — expressive and dramatic (screen/speaker)
            </li>
            <li>
              <strong>Processing</strong> — the calm, wise “brain” of the system
            </li>
            <li>
              <strong>Storage</strong> — the careful librarian who keeps all
              data safe
            </li>
            <li>
              <strong>The Bug</strong> — the silly troublemaker who causes chaos
            </li>

            <li>
              <strong>Students (Ensemble)</strong> — classmates who travel
              together inside the computer
            </li>
            <li>
              <strong>Director / Slides Operator</strong> — manages the scene
              changes and visuals
            </li>
          </ul>

          <p>
            In the story, the whole class got sucked into a glowing computer
            screen and had to work together to <strong>debug the system</strong>
            . We traveled through Input Island, Output Ocean, and the land of
            Processing while hunting for the Bug hiding in our code.
          </p>

          <p>
            The big moment came when we found a mistake in a function:
            <em>“exitDoor = CLOSED”</em> — which caused the system to break!
            Students worked together to fix the variable, run the function
            again, and restore the computer.
          </p>

          <p style={{ fontWeight: "bold", color: "#000", marginTop: "10px" }}>
            Through this play, we learned how all the main parts of a computer
            work together:
          </p>

          <ul style={{ paddingLeft: "25px" }}>
            <li>
              💡 <strong>Input</strong> brings information INTO the computer
            </li>
            <li>
              🧠 <strong>Processing</strong> thinks and follows instructions
            </li>
            <li>
              📦 <strong>Storage</strong> saves data for later
            </li>
            <li>
              🖥️ <strong>Output</strong> shows the results
            </li>
            <li>
              🔧 And <strong>code</strong> must be correct, organized, and
              debugged!
            </li>
          </ul>
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
              ✅ Make it with <strong>creativity</strong> — unique styles, fun
              colors, interesting expressions, and cool details!
            </li>
            <li>
              See the projects here:{" "}
              <Link
                href="https://escsisthebest.vercel.app/projects"
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

            {/* Digital Tools & Skills */}
            <li>
              How to make music using{" "}
              <a
                href="https://soundation.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#0070f3",
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
              >
                Soundation
              </a>{" "}
            </li>

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
              minute). Adrian reached <strong>48 WPM</strong> — try and beat
              this record!
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
