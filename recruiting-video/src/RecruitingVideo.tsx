import React from "react";
import { Audio } from "@remotion/media";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";
import { AbsoluteFill, Sequence, staticFile } from "remotion";
import { HookScene } from "./scenes/HookScene";
import { TeamScene } from "./scenes/TeamScene";
import { AgeScene } from "./scenes/AgeScene";
import { PositionsScene } from "./scenes/PositionsScene";
import { StatsScene } from "./scenes/StatsScene";
import { OfferScene } from "./scenes/OfferScene";
import { CtaProps, CtaScene } from "./scenes/CtaScene";

// 7 scenes (857 frames) minus 6 transitions of 12 frames = 785 frames.
// Scene lengths are sized so each voiceover sentence fits its scene.
export const RecruitingVideo: React.FC<CtaProps> = (props) => (
  <AbsoluteFill>
    <TransitionSeries>
      <TransitionSeries.Sequence name="Hook" durationInFrames={66}>
        <HookScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-bottom" })}
        timing={linearTiming({ durationInFrames: 12 })}
      />
      <TransitionSeries.Sequence name="Team" durationInFrames={84}>
        <TeamScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={wipe({ direction: "from-left" })}
        timing={linearTiming({ durationInFrames: 12 })}
      />
      <TransitionSeries.Sequence name="Age" durationInFrames={100}>
        <AgeScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-right" })}
        timing={linearTiming({ durationInFrames: 12 })}
      />
      <TransitionSeries.Sequence name="Positions" durationInFrames={160}>
        <PositionsScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={wipe({ direction: "from-bottom" })}
        timing={linearTiming({ durationInFrames: 12 })}
      />
      <TransitionSeries.Sequence name="Stats" durationInFrames={165}>
        <StatsScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-right" })}
        timing={linearTiming({ durationInFrames: 12 })}
      />
      <TransitionSeries.Sequence name="Offer" durationInFrames={132}>
        <OfferScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: 12 })}
      />
      <TransitionSeries.Sequence name="CTA" durationInFrames={150}>
        <CtaScene {...props} />
      </TransitionSeries.Sequence>
    </TransitionSeries>

    {/* Sound effects (ElevenLabs) */}
    <Audio name="SFX intro" src={staticFile("audio/stadium-intro.mp3")} volume={0.3} />
    <Sequence name="SFX CTA" from={635} layout="none">
      <Audio src={staticFile("audio/stadium-hit.mp3")} volume={0.3} />
    </Sequence>

    {/* Voiceover (ElevenLabs), one sentence per scene. trimBefore/trimAfter are frames in the source file. */}
    <Sequence name="VO Bist du bereit" from={8} layout="none">
      <Audio src={staticFile("audio/voiceover.mp3")} trimBefore={0} trimAfter={26} />
    </Sequence>
    <Sequence name="VO Luzern Lions" from={60} layout="none">
      <Audio src={staticFile("audio/voiceover.mp3")} trimBefore={26} trimAfter={89} />
    </Sequence>
    <Sequence name="VO 19 Jahre" from={132} layout="none">
      <Audio src={staticFile("audio/voiceover.mp3")} trimBefore={89} trimAfter={169} />
    </Sequence>
    <Sequence name="VO Keine Erfahrung" from={220} layout="none">
      <Audio src={staticFile("audio/voiceover.mp3")} trimBefore={169} trimAfter={309} />
    </Sequence>
    <Sequence name="VO Saison" from={368} layout="none">
      <Audio src={staticFile("audio/voiceover.mp3")} trimBefore={309} trimAfter={456} />
    </Sequence>
    <Sequence name="VO Was dich erwartet" from={521} layout="none">
      <Audio src={staticFile("audio/voiceover.mp3")} trimBefore={456} trimAfter={569} />
    </Sequence>
    <Sequence name="VO Probetraining" from={643} layout="none">
      <Audio src={staticFile("audio/voiceover.mp3")} trimBefore={569} trimAfter={656} />
    </Sequence>
  </AbsoluteFill>
);
