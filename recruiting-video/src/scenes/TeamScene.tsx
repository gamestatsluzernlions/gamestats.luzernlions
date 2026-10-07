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
        <Interactive.Div
          name="Sport label"
          style={{
            fontSize: 52,
            fontWeight: 800,
            letterSpacing: 12,
            textTransform: "uppercase",
            color: "#F5B700",
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
            fontSize: 250,
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
            fontSize: 300,
            color: "#F5B700",
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
