import React from "react";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";
import { HookScene } from "./scenes/HookScene";
import { TeamScene } from "./scenes/TeamScene";
import { AgeScene } from "./scenes/AgeScene";
import { PositionsScene } from "./scenes/PositionsScene";
import { StatsScene } from "./scenes/StatsScene";
import { OfferScene } from "./scenes/OfferScene";
import { CtaProps, CtaScene } from "./scenes/CtaScene";

// 7 scenes (795 frames) minus 6 transitions of 12 frames = 723 frames
export const RecruitingVideo: React.FC<CtaProps> = (props) => (
  <TransitionSeries>
    <TransitionSeries.Sequence name="Hook" durationInFrames={75}>
      <HookScene />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition
      presentation={slide({ direction: "from-bottom" })}
      timing={linearTiming({ durationInFrames: 12 })}
    />
    <TransitionSeries.Sequence name="Team" durationInFrames={90}>
      <TeamScene />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition
      presentation={wipe({ direction: "from-left" })}
      timing={linearTiming({ durationInFrames: 12 })}
    />
    <TransitionSeries.Sequence name="Age" durationInFrames={105}>
      <AgeScene />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition
      presentation={slide({ direction: "from-right" })}
      timing={linearTiming({ durationInFrames: 12 })}
    />
    <TransitionSeries.Sequence name="Positions" durationInFrames={135}>
      <PositionsScene />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition
      presentation={wipe({ direction: "from-bottom" })}
      timing={linearTiming({ durationInFrames: 12 })}
    />
    <TransitionSeries.Sequence name="Stats" durationInFrames={120}>
      <StatsScene />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition
      presentation={slide({ direction: "from-right" })}
      timing={linearTiming({ durationInFrames: 12 })}
    />
    <TransitionSeries.Sequence name="Offer" durationInFrames={120}>
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
);
