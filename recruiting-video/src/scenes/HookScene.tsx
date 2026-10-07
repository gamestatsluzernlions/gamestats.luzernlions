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

export const HookScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <FieldBackground>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Interactive.Div
          name="Hook line 1"
          className="headline"
          style={{
            fontSize: 230,
            color: "white",
            scale: interpolate(frame, [0, 0.4 * fps], [2.5, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              output: "perceptual-scale",
            }),
            opacity: interpolate(frame, [0, 0.2 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          Bist du
        </Interactive.Div>
        <Interactive.Div
          name="Hook line 2"
          className="headline"
          style={{
            fontSize: 260,
            color: "#F5B700",
            scale: interpolate(frame, [0.5 * fps, 0.9 * fps], [2.5, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              output: "perceptual-scale",
            }),
            opacity: interpolate(frame, [0.5 * fps, 0.7 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          bereit?
        </Interactive.Div>
        <Interactive.Div
          name="Hook underline"
          style={{
            marginTop: 40,
            height: 16,
            width: 560,
            backgroundColor: "#F5B700",
            scale: interpolate(frame, [1.1 * fps, 1.6 * fps], ["0 1", "1 1"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
      </AbsoluteFill>
    </FieldBackground>
  );
};
