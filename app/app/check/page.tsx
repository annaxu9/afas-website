"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
// If you prefer next/image, you can swap <img> for <Image>.

type Question = {
  id: string;
  prompt: string; // short question text
  imageSrc?: string; // optional image (code.org snippet, picture, etc.)
  imageAlt?: string;
  choices: string[]; // answer options (short words/phrases)
  correctIndex: number;
};

const QUESTIONS: Question[] = [
  {
    id: "variable-what",
    prompt: "This stores data that can change. What is it?",
    imageSrc: "/images/variable_example.png", // TODO: replace with your real image or remove
    imageAlt: "Code.org variable example",
    choices: ["Function", "Variable", "Hardware", "Bug"],
    correctIndex: 1,
  },
  {
    id: "function-what",
    prompt: "These are commands that DO something. What is it?",
    imageSrc: "/images/function_example.png", // optional
    imageAlt: "Code.org function example",
    choices: ["Function", "Input", "Output", "Storage"],
    correctIndex: 0,
  },
  {
    id: "hardware-what",
    prompt: "Which word means the physical parts of the computer?",
    imageSrc: "/images/hardware.png", // maybe a photo of a computer
    imageAlt: "Computer hardware",
    choices: ["Software", "Input", "Hardware", "Variable"],
    correctIndex: 2,
  },
  {
    id: "software-what",
    prompt: "Which word means the programs/apps that run on a computer?",
    imageSrc: "/images/software.png",
    imageAlt: "Software icons",
    choices: ["Hardware", "Software", "Bug", "Output"],
    correctIndex: 1,
  },
  {
    id: "input-what",
    prompt: "Keyboard and mouse are examples of…",
    imageSrc: "/images/input_devices.png",
    imageAlt: "Keyboard and mouse",
    choices: ["Output", "Input", "Software", "Variable"],
    correctIndex: 1,
  },
  {
    id: "output-what",
    prompt: "Monitor and printer are examples of…",
    imageSrc: "/images/output.png",
    imageAlt: "Monitor and printer",
    choices: ["Input", "Output", "Function", "Bug"],
    correctIndex: 1,
  },
  {
    id: "bug-what",
    prompt: "A mistake in your code is called…",
    imageSrc: "/images/bug_icon.png",
    imageAlt: "Bug icon",
    choices: ["Variable", "Hardware", "Bug", "Prepare"],
    correctIndex: 2,
  },
  {
    id: "ps-steps",
    prompt: "What is the correct order?",
    imageSrc: "/images/problemsolvingprocess.png",
    imageAlt: "Problem Solving Process",
    choices: [
      "Try → Define → Reflect → Prepare",
      "Define → Prepare → Try → Reflect",
      "Prepare → Try → Define → Reflect",
      "Reflect → Try → Prepare → Define",
    ],
    correctIndex: 1,
  },
  {
    id: "parameter-what",
    prompt:
      "These are the details you give a command so the computer knows exactly what to do. What are they called?",
    imageSrc: "/images/parameters.png",
    imageAlt: "Parameters example",
    choices: ["Variables", "Parameters", "Functions", "Inputs"],
    correctIndex: 1,
  },
  {
    id: "canvas-size",
    prompt: "In Game Lab, how big is the drawing canvas?",
    imageSrc: "/images/canvas_grid.png",
    imageAlt: "Game Lab canvas grid",
    choices: ["200 x 200", "400 x 400", "1000 x 1000", "50 x 50"],
    correctIndex: 1,
  },
  {
    id: "rect-meaning",
    prompt: "What does the code rect(100, 200, 50, 80) do?",
    imageSrc: "/images/rect_example.png",
    imageAlt: "Rectangle drawing example",
    choices: [
      "Draws a rectangle using four colors",
      "Draws a rectangle at a position with a width and height",
      "Draws a circle",
      "Moves a sprite",
    ],
    correctIndex: 1,
  },
  {
    id: "order-matters",
    prompt: "Why does code order matter in Game Lab?",
    imageSrc: "/images/codeorder.png",
    imageAlt: "Code stacking order",
    choices: [
      "Because the computer guesses the correct order",
      "Because the computer runs instructions from top to bottom",
      "Because the code changes randomly",
      "Because the canvas is too small",
    ],
    correctIndex: 1,
  },
  {
    id: "cpu-role",
    prompt: "What does the CPU do inside a computer?",
    imageSrc: "/images/cpu.png",
    imageAlt: "CPU brain of computer",
    choices: [
      "Makes sound",
      "Stores long-term data",
      "Runs instructions and processes information",
      "Shows pictures on the screen",
    ],
    correctIndex: 2,
  },
  {
    id: "storage-role",
    prompt: "Which part of the computer saves data for later?",
    imageSrc: "/images/storage.png",
    imageAlt: "Computer storage",
    choices: ["Input", "Processing", "Bug", "Storage"],
    correctIndex: 3,
  },
  {
    id: "storage-role",
    prompt: "Which part of the computer saves data for later?",
    imageSrc: "/images/storage.png",
    imageAlt: "Computer storage",
    choices: ["Input", "Processing", "Bug", "Storage"],
    correctIndex: 3,
  },
  {
    id: "variable-example-score",
    prompt:
      "If you want to keep track of a score in a game, what should you use?",
    imageSrc: "/images/score_variable.png",
    imageAlt: "Score variable",
    choices: ["Variable", "Function", "Output", "CPU"],
    correctIndex: 0,
  },
  {
    id: "frontend-what",
    prompt:
      "Which job focuses on what you see on the screen, like buttons and colors?",
    imageSrc: "/images/frontend.png",
    imageAlt: "Frontend example",
    choices: ["Frontend engineer", "Backend engineer", "Storage", "Bug"],
    correctIndex: 0,
  },
  {
    id: "backend-what",
    prompt:
      "Which job focuses on storing data and running behind-the-scenes code?",
    imageSrc: "/images/backend.png",
    imageAlt: "Backend engineer diagram",
    choices: ["Frontend engineer", "Backend engineer", "Designer", "CPU"],
    correctIndex: 1,
  },
  {
    id: "input-role",
    prompt: "Which part brings information INTO the computer?",
    imageSrc: "/images/input_island.png",
    imageAlt: "Input Island from the play",
    choices: ["Output", "Processing", "Input", "Storage"],
    correctIndex: 2,
  },
  {
    id: "output-role",
    prompt: "Which part shows the results of what the computer did?",
    imageSrc: "/images/output_ocean.png",
    imageAlt: "Output Ocean from the play",
    choices: ["Output", "Input", "Variable", "CPU"],
    correctIndex: 0,
  },
  {
    id: "bug-play",
    prompt: "In our classroom play, what caused the computer to break?",
    imageSrc: "/images/bug_play.png",
    imageAlt: "Bug character",
    choices: [
      "The function was too long",
      "The variable had the wrong value",
      "The CPU was missing",
      "The storage was full",
    ],
    correctIndex: 1,
  },
  {
    id: "ps-define",
    prompt:
      "In the Problem-Solving Process, which step asks: 'What is the problem?'",
    imageSrc: "/images/define.png",
    imageAlt: "Define step",
    choices: ["Prepare", "Try", "Define", "Reflect"],
    correctIndex: 2,
  },
  {
    id: "prepare-step",
    prompt: "Which step of the Problem-Solving Process is about making a plan?",
    imageSrc: "/images/prepare.png",
    imageAlt: "Prepare step",
    choices: ["Try", "Prepare", "Reflect", "Debug"],
    correctIndex: 1,
  },
  {
    id: "reflect-step",
    prompt: "Which step asks you to think: What worked? What can I improve?",
    imageSrc: "/images/reflect.png",
    imageAlt: "Reflect step",
    choices: ["Define", "Prepare", "Try", "Reflect"],
    correctIndex: 3,
  },
  {
    id: "try-step",
    prompt: "Which step is where you actually test your idea?",
    imageSrc: "/images/try.png",
    imageAlt: "Try step",
    choices: ["Try", "Prepare", "Define", "Reflect"],
    correctIndex: 0,
  },
  {
    id: "ellipse-draw",
    prompt: "Which command draws a circle or oval?",
    imageSrc: "/images/ellipse.png",
    imageAlt: "Ellipse example",
    choices: ["rect()", "ellipse()", "fill()", "variable"],
    correctIndex: 1,
  },
  {
    id: "fill-color",
    prompt: "Which command changes the color of your shapes?",
    imageSrc: "/images/fill.png",
    imageAlt: "Fill color example",
    choices: ["fill()", "rect()", "ellipse()", "size()"],
    correctIndex: 0,
  },
  {
    id: "coordinate-system",
    prompt:
      "In Game Lab, what do the numbers in rect(x, y, w, h) tell the computer?",
    imageSrc: "/images/coordinates.png",
    imageAlt: "Coordinate grid",
    choices: [
      "Random guesses",
      "The exact position and size",
      "The color of the shape",
      "The direction of movement",
    ],
    correctIndex: 1,
  },
  {
    id: "x-axis",
    prompt: "On a Game Lab grid, which direction does the x-value measure?",
    imageSrc: "/images/xaxis.png",
    imageAlt: "X axis",
    choices: ["Up and down", "Side to side", "Diagonal", "Through time"],
    correctIndex: 1,
  },
  {
    id: "y-axis",
    prompt: "On a Game Lab grid, the y-value tells you how far…",
    imageSrc: "/images/yaxis.png",
    imageAlt: "Y axis",
    choices: ["right", "left", "down", "loud"],
    correctIndex: 2,
  },
  {
    id: "designer-role",
    prompt: "Who decides how a website looks—colors, layout, icons?",
    imageSrc: "/images/designer.png",
    imageAlt: "Designer working",
    choices: ["Backend engineer", "Designer", "CPU", "Output"],
    correctIndex: 1,
  },
  {
    id: "frontend-example",
    prompt: "A button you click on a website is made by a…",
    imageSrc: "/images/button.png",
    imageAlt: "Button UI example",
    choices: ["Frontend engineer", "Backend engineer", "Storage", "Bug"],
    correctIndex: 0,
  },
  {
    id: "backend-example",
    prompt:
      "Which part of a website handles data, passwords, and saving information?",
    imageSrc: "/images/server.png",
    imageAlt: "Server graphic",
    choices: ["Frontend", "Backend", "Monitor", "Designer"],
    correctIndex: 1,
  },
  {
    id: "motherboard-role",
    prompt: "What is the motherboard?",
    imageSrc: "/images/motherboard.png",
    imageAlt: "Motherboard",
    choices: [
      "The main circuit board that connects everything",
      "A type of software",
      "A bug in the system",
      "An input device",
    ],
    correctIndex: 0,
  },
  {
    id: "run-code",
    prompt: "What does it mean to 'run your code'?",
    imageSrc: "/images/run_button.png",
    imageAlt: "Run button",
    choices: [
      "Erase your code",
      "Check for updates",
      "Tell the computer to execute your instructions",
      "Save your file",
    ],
    correctIndex: 2,
  },
  {
    id: "debugging-why",
    prompt: "Why do programmers debug their code?",
    imageSrc: "/images/debug.png",
    imageAlt: "Debug icon",
    choices: [
      "To make the computer faster",
      "To find and fix mistakes",
      "To change the color scheme",
      "To add hardware",
    ],
    correctIndex: 1,
  },
  {
    id: "storage-example",
    prompt: "Which is an example of computer storage?",
    imageSrc: "/images/storage_device.png",
    imageAlt: "Storage device",
    choices: ["Keyboard", "CPU", "Hard drive", "Monitor"],
    correctIndex: 2,
  },
  {
    id: "output-speech",
    prompt: "When your computer plays sound through speakers, this is…",
    imageSrc: "/images/speaker.png",
    imageAlt: "Speaker output",
    choices: ["Input", "Output", "Variable", "Prepare"],
    correctIndex: 1,
  },
  {
    id: "input-speech",
    prompt: "When you talk into a microphone, this is…",
    imageSrc: "/images/microphone.png",
    imageAlt: "Microphone input",
    choices: ["Output", "Input", "Function", "Bug"],
    correctIndex: 1,
  },
  {
    id: "tower-engineering",
    prompt: "During our paper tower challenge, which skills did engineers use?",
    imageSrc: "/images/paper_tower.png",
    imageAlt: "Paper tower challenge",
    choices: [
      "Teamwork and planning",
      "Keyboard typing",
      "Sound mixing",
      "Debugging websites",
    ],
    correctIndex: 0,
  },
  {
    id: "play-processing",
    prompt:
      "In our classroom play, which character was the 'brain' that followed instructions?",
    imageSrc: "/images/processing_character.png",
    imageAlt: "Processing character",
    choices: ["Output", "Processing", "Input", "Bug"],
    correctIndex: 1,
  },
  {
    id: "coding-definition",
    prompt: "What is coding?",
    imageSrc: "/images/coding_definition.png",
    imageAlt: "Coding definition",
    choices: [
      "Talking to computers using instructions",
      "Drawing pictures on paper",
      "Typing random letters",
      "Fixing hardware",
    ],
    correctIndex: 0,
  },
  {
    id: "why-code",
    prompt: "Why do people learn to code?",
    imageSrc: "/images/why_code.png",
    imageAlt: "Why we code",
    choices: [
      "To boss computers around",
      "To give computers instructions so they can do tasks",
      "To make computers heavier",
      "To print more paper",
    ],
    correctIndex: 1,
  },
  {
    id: "codeorg-what",
    prompt: "What is Code.org?",
    imageSrc: "/images/codeorg_logo.png",
    imageAlt: "Code.org logo",
    choices: [
      "A website where you learn to code",
      "A video game",
      "A hardware store",
      "A social media app",
    ],
    correctIndex: 0,
  },
  {
    id: "command-definition",
    prompt: "What is a command in coding?",
    imageSrc: "/images/command.png",
    imageAlt: "Coding command",
    choices: [
      "A mistake in code",
      "A direction you give the computer",
      "A picture on the screen",
      "A problem you ignore",
    ],
    correctIndex: 1,
  },
  {
    id: "rect-command",
    prompt: "What does rect() do in Game Lab?",
    imageSrc: "/images/rect.png",
    imageAlt: "Rectangle function",
    choices: [
      "Draws a rectangle",
      "Draws a circle",
      "Changes the background",
      "Plays a sound",
    ],
    correctIndex: 0,
  },
  {
    id: "fill-command",
    prompt: "The fill() command changes the…",
    imageSrc: "/images/fill_color.png",
    imageAlt: "Changing fill color",
    choices: ["Shape size", "Shape color", "Shape position", "The CPU speed"],
    correctIndex: 1,
  },
  {
    id: "background-command",
    prompt: "The background() command changes the…",
    imageSrc: "/images/background.png",
    imageAlt: "Background command",
    choices: ["Canvas color", "Shape speed", "Variable value", "Hardware"],
    correctIndex: 0,
  },
  {
    id: "codeorg-workspace",
    prompt: "What is the workspace in Code.org?",
    imageSrc: "/images/workspace.png",
    imageAlt: "Workspace area",
    choices: [
      "Where you write your code",
      "Where the CPU lives",
      "The hardware inside the computer",
      "A music app",
    ],
    correctIndex: 0,
  },
  {
    id: "codeorg-toolbox",
    prompt: "What is the toolbox in Code.org?",
    imageSrc: "/images/toolbox.png",
    imageAlt: "Toolbox area",
    choices: [
      "A place where coding commands live",
      "A storage box",
      "A hardware container",
      "A typing tool",
    ],
    correctIndex: 0,
  },
  {
    id: "coding-instructions",
    prompt: "Computers follow instructions exactly. What does this mean?",
    imageSrc: "/images/exact_instructions.png",
    imageAlt: "Exact instructions",
    choices: [
      "Computers guess what you want",
      "Computers need clear, precise code to work",
      "Computers fix their own bugs",
      "Computers change the code for fun",
    ],
    correctIndex: 1,
  },
  {
    id: "syntax-definition",
    prompt: "In coding, what is 'syntax'?",
    imageSrc: "/images/syntax.png",
    imageAlt: "Syntax example",
    choices: [
      "The style of the computer case",
      "The rules for how code must be written",
      "A type of hardware",
      "A music program",
    ],
    correctIndex: 1,
  },
];

type SavedState = {
  order: number[];
  currentIndex: number;
  answers: (number | null)[];
};

const STORAGE_KEY = "check-understanding-v1";

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function CheckUnderstandingPage() {
  const [order, setOrder] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Load state from localStorage or init new shuffled order
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved: SavedState = JSON.parse(raw);
        if (
          Array.isArray(saved.order) &&
          saved.order.length === QUESTIONS.length &&
          Array.isArray(saved.answers)
        ) {
          setOrder(saved.order);
          setCurrentIndex(
            Math.min(saved.currentIndex ?? 0, QUESTIONS.length - 1)
          );
          setAnswers(saved.answers);
          setLoaded(true);
          return;
        }
      }
    } catch {
      // ignore parse errors and fall back to new state
    }

    // Create new shuffled order
    const indices = QUESTIONS.map((_, i) => i);
    const shuffled = shuffleArray(indices);
    setOrder(shuffled);
    setAnswers(Array(QUESTIONS.length).fill(null));
    setCurrentIndex(0);
    setLoaded(true);
  }, []);

  // Save to localStorage whenever key pieces change
  useEffect(() => {
    if (!loaded || typeof window === "undefined") return;
    const state: SavedState = { order, currentIndex, answers };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [order, currentIndex, answers, loaded]);

  if (!loaded || order.length === 0) {
    return (
      <main
        style={{
          minHeight: "100vh",
          padding: "40px",
          fontFamily: "Arial, sans-serif",
          background: "linear-gradient(135deg, #FFF8A6, #FFD1DC, #B3E5FC)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "20px" }}>Loading…</p>
      </main>
    );
  }

  const questionIndex = order[currentIndex];
  const question = QUESTIONS[questionIndex];
  const selected = answers[questionIndex];
  const isCorrect = selected !== null && selected === question.correctIndex;

  const handleChoose = (choiceIndex: number) => {
    setAnswers((prev) => {
      const copy = [...prev];
      copy[questionIndex] = choiceIndex;
      return copy;
    });
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1 < order.length ? prev + 1 : 0));
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? order.length - 1 : prev - 1));
  };

  const resetProgress = () => {
    const indices = QUESTIONS.map((_, i) => i);
    const shuffled = shuffleArray(indices);
    setOrder(shuffled);
    setAnswers(Array(QUESTIONS.length).fill(null));
    setCurrentIndex(0);
  };

  const answeredCount = answers.filter((a) => a !== null).length;

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
          maxWidth: "800px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          color: "black",
        }}
      >
        <h1
          style={{
            fontSize: "34px",
            fontWeight: 900,
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          ✅ Check Your Understanding
        </h1>

        {/* Progress */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "14px",
            marginBottom: "10px",
            color: "#555",
          }}
        >
          <span>
            Question {currentIndex + 1} of {QUESTIONS.length}
          </span>
          <span>
            Answered: {answeredCount}/{QUESTIONS.length}
          </span>
        </div>

        {/* Question Card */}
        <div
          style={{
            borderRadius: "16px",
            border: "1px solid #ddd",
            padding: "20px",
            background: "#fafafa",
          }}
        >
          <p
            style={{
              fontSize: "20px",
              fontWeight: 700,
              marginBottom: "12px",
            }}
          >
            {question.prompt}
          </p>

          {question.imageSrc && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "14px",
              }}
            >
              <img
                src={question.imageSrc}
                aria-hidden="true"
                alt=""
                style={{
                  maxWidth: "100%",
                  maxHeight: "400px",
                  height: "auto",
                  borderRadius: "12px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
          )}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {question.choices.map((choice, idx) => {
              const isSelected = selected === idx;
              let background = "white";

              if (isSelected && selected !== null) {
                background = isCorrect ? "#C8E6C9" : "#FFCDD2";
              }

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleChoose(idx)}
                  style={{
                    textAlign: "left",
                    padding: "10px 12px",
                    borderRadius: "12px",
                    border: isSelected ? "2px solid #333" : "1px solid #ccc",
                    background,
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >
                  {choice}
                </button>
              );
            })}
          </div>

          {/* Tiny feedback, no long explanation */}
          {selected !== null && (
            <p
              style={{
                marginTop: "10px",
                fontSize: "16px",
                fontWeight: 700,
                color: isCorrect ? "#2e7d32" : "#c62828",
              }}
            >
              {isCorrect ? "✅ Correct!" : "❌ Try another one next time!"}
            </p>
          )}
        </div>

        {/* Controls */}
        <div
          style={{
            marginTop: "16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <button
            type="button"
            onClick={goPrev}
            style={{
              padding: "8px 14px",
              borderRadius: "999px",
              border: "1px solid #ccc",
              background: "white",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            ◀ Prev
          </button>

          <button
            type="button"
            onClick={resetProgress}
            style={{
              padding: "8px 14px",
              borderRadius: "999px",
              border: "none",
              background: "#ffb74d",
              color: "#000",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            🔁 Shuffle & Reset
          </button>

          <button
            type="button"
            onClick={goNext}
            style={{
              padding: "8px 14px",
              borderRadius: "999px",
              border: "1px solid #ccc",
              background: "white",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Next ▶
          </button>
        </div>

        {/* Back link */}
        <div style={{ marginTop: "24px", textAlign: "center" }}>
          <Link
            href="/learned"
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              textDecoration: "none",
              color: "black",
            }}
          >
            ⬅ Back to What We&apos;ve Learned
          </Link>
        </div>
      </div>
    </main>
  );
}
