"use client";

import { useState } from "react";
import Image from "next/image";

const paperImages = Array.from(
  { length: 9 },
  (_, i) => `/images/paper${i + 1}.png`
);

export function PaperTowerSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prevIndex) =>
      prevIndex === 0 ? paperImages.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrent((prevIndex) =>
      prevIndex === paperImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      style={{
        marginTop: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
      }}
    >
      {/* Image with natural dimensions */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "100%",
          overflow: "hidden",
        }}
      >
        <Image
          width={100}
          height={100}
          src={paperImages[current]}
          alt={`Paper tower photo ${current + 1}`}
          style={{
            height: "450px", // 🔥 your fixed height (adjust as needed)
            width: "auto", // keeps aspect ratio
            borderRadius: "12px",
          }}
          unoptimized
        />
      </div>

      {/* Controls */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginTop: "4px",
        }}
      >
        <button
          type="button"
          onClick={prev}
          style={{
            padding: "6px 12px",
            borderRadius: "999px",
            border: "1px solid #ccc",
            background: "white",
            cursor: "pointer",
          }}
        >
          ◀ Prev
        </button>

        <span style={{ fontSize: "14px" }}>
          {current + 1} / {paperImages.length}
        </span>

        <button
          type="button"
          onClick={next}
          style={{
            padding: "6px 12px",
            borderRadius: "999px",
            border: "1px solid #ccc",
            background: "white",
            cursor: "pointer",
          }}
        >
          Next ▶
        </button>
      </div>

      {/* Dot indicators */}
      <div style={{ display: "flex", gap: "4px", marginTop: "4px" }}>
        {paperImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "999px",
              border: "none",
              background: index === current ? "black" : "rgba(0,0,0,0.2)",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}
