"use client";

import { useState } from "react";
import Image from "next/image";

const firstRowImages = ["/images/paper_1.png", "/images/paper_2.png"];

const remainingMainImages = Array.from(
  { length: 4 },
  (_, i) => `/images/paper_${i + 3}.png`,
);

const additionalPaperImages = ["/images/paper_7.png", "/images/paper_8.png"];

const imageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "12px",
  objectFit: "contain",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "16px",
  width: "100%",
};

export function PaperTowerSlider() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      style={{
        marginTop: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div style={gridStyle}>
        {firstRowImages.map((src, index) => (
          <Image
            key={src}
            width={1000}
            height={1000}
            src={src}
            alt={`Paper tower photo ${index + 1}`}
            style={imageStyle}
            unoptimized
          />
        ))}
      </div>

      {showMore && (
        <>
          <div style={gridStyle}>
            {remainingMainImages.map((src, index) => (
              <Image
                key={src}
                width={1000}
                height={1000}
                src={src}
                alt={`Paper tower photo ${index + 3}`}
                style={imageStyle}
                unoptimized
              />
            ))}
          </div>

          <div style={gridStyle}>
            {additionalPaperImages.map((src, index) => (
              <Image
                key={src}
                width={1000}
                height={1000}
                src={src}
                alt={`Paper tower photo ${index + 7}`}
                style={imageStyle}
                unoptimized
              />
            ))}
          </div>
        </>
      )}

      <button
        type="button"
        onClick={() => setShowMore((previous) => !previous)}
        style={{
          alignSelf: "center",
          padding: "8px 18px",
          borderRadius: "999px",
          border: "1px solid #ccc",
          background: "white",
          fontSize: "14px",
          cursor: "pointer",
        }}
      >
        {showMore ? "See less" : "See more"}
      </button>
    </div>
  );
}
