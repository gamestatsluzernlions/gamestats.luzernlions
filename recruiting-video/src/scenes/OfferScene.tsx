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

const Check: React.FC = () => (
  <span
    style={{
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      width: 84,
      height: 84,
      borderRadius: 42,
      backgroundColor: "#F5B700",
      color: "#0b0b0b",
      fontSize: 52,
      fontWeight: 800,
      marginRight: 36,
      flexShrink: 0,
    }}
  >
    ✓
  </span>
);

export const OfferScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <FieldBackground>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          paddingLeft: 80,
          paddingRight: 80,
        }}
      >
        <Interactive.Div
          name="Offer title"
          className="headline"
          style={{
            fontSize: 150,
            marginBottom: 100,
            opacity: interpolate(frame, [0, 0.4 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          Was dich
          <br />
          <span style={{ color: "#F5B700" }}>erwartet</span>
        </Interactive.Div>

        <Interactive.Div
          name="Offer coaching"
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 54,
            fontWeight: 600,
            marginBottom: 56,
            opacity: interpolate(frame, [0.6 * fps, 0.9 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            scale: interpolate(frame, [0.6 * fps, 1 * fps], [0.85, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              output: "perceptual-scale",
            }),
          }}
        >
          <Check />
          Coaching ab Tag 1
        </Interactive.Div>
        <Interactive.Div
          name="Offer fitness"
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 54,
            fontWeight: 600,
            marginBottom: 56,
            opacity: interpolate(frame, [1 * fps, 1.3 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            scale: interpolate(frame, [1 * fps, 1.4 * fps], [0.85, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              output: "perceptual-scale",
            }),
          }}
        >
          <Check />
          Fitness &amp; Athletik
        </Interactive.Div>
        <Interactive.Div
          name="Offer games"
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 54,
            fontWeight: 600,
            marginBottom: 56,
            opacity: interpolate(frame, [1.4 * fps, 1.7 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            scale: interpolate(frame, [1.4 * fps, 1.8 * fps], [0.85, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              output: "perceptual-scale",
            }),
          }}
        >
          <Check />
          Spiele in der ganzen Schweiz
        </Interactive.Div>
        <Interactive.Div
          name="Offer team"
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 54,
            fontWeight: 600,
            opacity: interpolate(frame, [1.8 * fps, 2.1 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            scale: interpolate(frame, [1.8 * fps, 2.2 * fps], [0.85, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              output: "perceptual-scale",
            }),
          }}
        >
          <Check />
          Ein Team, das zusammenhält
        </Interactive.Div>
      </AbsoluteFill>
    </FieldBackground>
  );
};
