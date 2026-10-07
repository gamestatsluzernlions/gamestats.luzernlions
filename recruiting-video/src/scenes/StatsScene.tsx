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

// Season totals taken from the "Season" tab of ../index.html
const RUSHING_YARDS = 1422;
const RECEIVING_YARDS = 977;
const TOUCHDOWNS = 28;

// Swiss number format, e.g. 1'422
const formatCount = (value: number) =>
  Math.round(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, "'");

export const StatsScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const countUp = (target: number, startSec: number) =>
    formatCount(
      interpolate(frame, [startSec * fps, (startSec + 1.2) * fps], [0, target], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: Easing.bezier(0.16, 1, 0.3, 1),
      }),
    );

  return (
    <FieldBackground>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Interactive.Div
          name="Stats title"
          style={{
            fontSize: 56,
            fontWeight: 800,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#8FB8FF",
            marginBottom: 90,
            opacity: interpolate(frame, [0, 0.4 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          Unsere Saison in Zahlen
        </Interactive.Div>

        <Interactive.Div
          name="Stat rushing"
          style={{
            marginBottom: 80,
            opacity: interpolate(frame, [0.3 * fps, 0.6 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <div className="headline" style={{ fontSize: 240 }}>
            {countUp(RUSHING_YARDS, 0.3)}
          </div>
          <div style={{ fontSize: 52, fontWeight: 600 }}>Rushing Yards</div>
        </Interactive.Div>

        <Interactive.Div
          name="Stat receiving"
          style={{
            marginBottom: 80,
            opacity: interpolate(frame, [0.9 * fps, 1.2 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <div className="headline" style={{ fontSize: 240 }}>
            {countUp(RECEIVING_YARDS, 0.9)}
          </div>
          <div style={{ fontSize: 52, fontWeight: 600 }}>Receiving Yards</div>
        </Interactive.Div>

        <Interactive.Div
          name="Stat touchdowns"
          style={{
            opacity: interpolate(frame, [1.5 * fps, 1.8 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <div className="headline" style={{ fontSize: 240, color: "#8FB8FF" }}>
            {countUp(TOUCHDOWNS, 1.5)}
          </div>
          <div style={{ fontSize: 52, fontWeight: 600 }}>Touchdowns</div>
        </Interactive.Div>
      </AbsoluteFill>
    </FieldBackground>
  );
};
