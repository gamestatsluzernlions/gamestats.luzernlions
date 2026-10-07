import React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { FieldBackground } from "../FieldBackground";

export const AgeScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <FieldBackground>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Interactive.Div
          name="We want you"
          className="headline"
          style={{
            fontSize: 140,
            textAlign: "center",
            opacity: interpolate(frame, [0, 0.4 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: interpolate(frame, [0, 0.6 * fps], ["0px -60px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          Wir suchen
          <br />
          neue Spieler
        </Interactive.Div>
        <Interactive.Div
          name="Age badge"
          className="headline"
          style={{
            marginTop: 60,
            marginBottom: 40,
            width: 620,
            height: 620,
            borderRadius: 310,
            backgroundColor: "#FFFFFF",
            color: "#05367A",
            fontSize: 330,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 0 120px rgba(255, 255, 255, 0.45)",
            scale: interpolate(frame, [0.6 * fps, 1.2 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.spring({ damping: 12 }),
              output: "perceptual-scale",
            }),
            rotate: interpolate(frame, [0.6 * fps, 1.2 * fps], ["-25deg", "0deg"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.spring({ damping: 12 }),
            }),
          }}
        >
          19+
        </Interactive.Div>
        <Interactive.Div
          name="Age caption"
          style={{
            fontSize: 64,
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: 6,
            opacity: interpolate(frame, [1.4 * fps, 1.9 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          ab 19 Jahren
        </Interactive.Div>
      </AbsoluteFill>
    </FieldBackground>
  );
};
