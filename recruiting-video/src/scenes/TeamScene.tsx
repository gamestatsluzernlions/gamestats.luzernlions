import React from "react";
import {
  AbsoluteFill,
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { FieldBackground } from "../FieldBackground";

export const TeamScene: React.FC = () => {
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
        <Img
          name="Lion logo"
          src={staticFile("logo/lion-white.png")}
          style={{
            width: 520,
            marginBottom: 50,
            opacity: interpolate(frame, [0, 0.3 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            scale: interpolate(frame, [0, 0.7 * fps], [0.4, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.spring({ damping: 14 }),
              output: "perceptual-scale",
            }),
          }}
        />
        <Interactive.Div
          name="Sport label"
          style={{
            fontSize: 52,
            fontWeight: 800,
            letterSpacing: 12,
            textTransform: "uppercase",
            color: "#8FB8FF",
            marginBottom: 30,
            opacity: interpolate(frame, [0, 0.5 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: interpolate(frame, [0, 0.6 * fps], ["0px 40px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          American Football
        </Interactive.Div>
        <Interactive.Div
          name="Team name Luzern"
          className="headline"
          style={{
            fontSize: 220,
            color: "white",
            opacity: interpolate(frame, [0.2 * fps, 0.6 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: interpolate(frame, [0.2 * fps, 0.8 * fps], ["-300px 0px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          Luzern
        </Interactive.Div>
        <Interactive.Div
          name="Team name Lions"
          className="headline"
          style={{
            fontSize: 260,
            color: "#8FB8FF",
            opacity: interpolate(frame, [0.4 * fps, 0.8 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: interpolate(frame, [0.4 * fps, 1 * fps], ["300px 0px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          Lions
        </Interactive.Div>
        <Interactive.Div
          name="Team tagline"
          style={{
            fontSize: 60,
            fontWeight: 600,
            marginTop: 50,
            opacity: interpolate(frame, [1.3 * fps, 1.8 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          suchen Verstärkung.
        </Interactive.Div>
      </AbsoluteFill>
    </FieldBackground>
  );
};
