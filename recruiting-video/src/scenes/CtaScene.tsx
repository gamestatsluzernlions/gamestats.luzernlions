import React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { z } from "zod";
import { FieldBackground } from "../FieldBackground";

export const ctaSchema = z.object({
  trainingWhen: z.string(),
  trainingWhere: z.string(),
  contact: z.string(),
});

export type CtaProps = z.infer<typeof ctaSchema>;

export const CtaScene: React.FC<CtaProps> = ({
  trainingWhen,
  trainingWhere,
  contact,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <FieldBackground>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          paddingLeft: 90,
          paddingRight: 90,
        }}
      >
        <Interactive.Div
          name="CTA title"
          className="headline"
          style={{
            fontSize: 170,
            scale: interpolate(frame, [0, 0.5 * fps], [1.6, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              output: "perceptual-scale",
            }),
            opacity: interpolate(frame, [0, 0.3 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          Komm ins
          <br />
          <span style={{ color: "#F5B700" }}>Probetraining</span>
        </Interactive.Div>

        <Interactive.Div
          name="CTA details"
          style={{
            marginTop: 90,
            padding: "50px 60px",
            borderRadius: 32,
            border: "6px solid #F5B700",
            backgroundColor: "rgba(245, 183, 0, 0.08)",
            fontSize: 54,
            fontWeight: 600,
            lineHeight: 1.4,
            opacity: interpolate(frame, [0.8 * fps, 1.2 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: interpolate(frame, [0.8 * fps, 1.3 * fps], ["0px 80px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          <div>{trainingWhen}</div>
          <div>{trainingWhere}</div>
        </Interactive.Div>

        <Interactive.Div
          name="CTA requirements"
          style={{
            marginTop: 60,
            fontSize: 48,
            fontWeight: 800,
            letterSpacing: 4,
            textTransform: "uppercase",
            opacity: interpolate(frame, [1.5 * fps, 1.9 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          Ab 19 · Keine Erfahrung nötig
        </Interactive.Div>

        <Interactive.Div
          name="CTA contact"
          className="headline"
          style={{
            marginTop: 70,
            fontSize: 96,
            color: "#F5B700",
            opacity: interpolate(frame, [2 * fps, 2.4 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            scale: interpolate(frame, [2 * fps, 2.6 * fps], [0.6, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.spring({ damping: 12 }),
              output: "perceptual-scale",
            }),
          }}
        >
          {contact}
        </Interactive.Div>
      </AbsoluteFill>
    </FieldBackground>
  );
};
