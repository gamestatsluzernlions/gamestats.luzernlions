import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { bodyFont, headlineFont } from "./fonts";

// Dark background with drifting yard lines, like looking down onto a football field.
export const FieldBackground: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const frame = useCurrentFrame();
  const drift = interpolate(frame, [0, 300], [0, 240]);

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(ellipse at 50% 35%, #1f1f1f 0%, #0b0b0b 60%, #000000 100%)",
        fontFamily: bodyFont,
        color: "white",
        overflow: "hidden",
      }}
    >
      <AbsoluteFill style={{ opacity: 0.12, translate: `0px ${drift % 240}px` }}>
        {new Array(12).fill(true).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: i * 240 - 240,
              height: 6,
              backgroundColor: "white",
            }}
          />
        ))}
      </AbsoluteFill>
      <style>
        {`.headline { font-family: ${headlineFont}; text-transform: uppercase; line-height: 0.95; }`}
      </style>
      {children}
    </AbsoluteFill>
  );
};
