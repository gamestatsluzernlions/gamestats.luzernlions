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

export const PositionsScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <FieldBackground>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          paddingLeft: 100,
          paddingRight: 100,
        }}
      >
        <Interactive.Div
          name="No experience title"
          className="headline"
          style={{
            fontSize: 120,
            opacity: interpolate(frame, [0, 0.4 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          Keine Erfahrung?
        </Interactive.Div>
        <Interactive.Div
          name="No problem title"
          className="headline"
          style={{
            fontSize: 120,
            color: "#8FB8FF",
            marginBottom: 80,
            opacity: interpolate(frame, [0.5 * fps, 0.9 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          Kein Problem.
        </Interactive.Div>

        <Interactive.Div
          name="Position fast"
          style={{
            fontSize: 50,
            fontWeight: 600,
            marginBottom: 44,
            borderLeft: "14px solid #FFFFFF",
            paddingLeft: 36,
            opacity: interpolate(frame, [1.2 * fps, 1.5 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: interpolate(frame, [1.2 * fps, 1.6 * fps], ["200px 0px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          <div style={{ fontSize: 64, fontWeight: 800, color: "#8FB8FF" }}>Schnell?</div>
          <div>Receiver &amp; Cornerback</div>
        </Interactive.Div>
        <Interactive.Div
          name="Position strong"
          style={{
            fontSize: 50,
            fontWeight: 600,
            marginBottom: 44,
            borderLeft: "14px solid #FFFFFF",
            paddingLeft: 36,
            opacity: interpolate(frame, [1.6 * fps, 1.9 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: interpolate(frame, [1.6 * fps, 2 * fps], ["200px 0px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          <div style={{ fontSize: 64, fontWeight: 800, color: "#8FB8FF" }}>Stark?</div>
          <div>Offensive &amp; Defensive Line</div>
        </Interactive.Div>
        <Interactive.Div
          name="Position agile"
          style={{
            fontSize: 50,
            fontWeight: 600,
            marginBottom: 44,
            borderLeft: "14px solid #FFFFFF",
            paddingLeft: 36,
            opacity: interpolate(frame, [2 * fps, 2.3 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: interpolate(frame, [2 * fps, 2.4 * fps], ["200px 0px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          <div style={{ fontSize: 64, fontWeight: 800, color: "#8FB8FF" }}>Wendig?</div>
          <div>Runningback &amp; Linebacker</div>
        </Interactive.Div>
        <Interactive.Div
          name="Position smart"
          style={{
            fontSize: 50,
            fontWeight: 600,
            borderLeft: "14px solid #FFFFFF",
            paddingLeft: 36,
            opacity: interpolate(frame, [2.4 * fps, 2.7 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: interpolate(frame, [2.4 * fps, 2.8 * fps], ["200px 0px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          <div style={{ fontSize: 64, fontWeight: 800, color: "#8FB8FF" }}>Cleverer Kopf?</div>
          <div>Quarterback &amp; Safety</div>
        </Interactive.Div>
      </AbsoluteFill>
    </FieldBackground>
  );
};
