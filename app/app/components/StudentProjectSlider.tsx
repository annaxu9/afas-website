// components/StudentProjectSlider.tsx
"use client";

import React from "react";

export function StudentProjectSlider({
  images,
  intervalMs = 200, // goes super fast, exactly like a flipbook
}: {
  images: string[];
  intervalMs?: number;
}) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (images.length <= 1) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(id);
  }, [images, intervalMs]);

  if (images.length === 0) return null;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingTop: "75%", // Keeps a stable layout, avoids jumping
        overflow: "hidden",
      }}
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="Student project"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: i === index ? "block" : "none", // <-- NO FADE, instant switch
          }}
        />
      ))}
    </div>
  );
}
