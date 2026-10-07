import { Composition, Folder } from "remotion";
import { RecruitingVideo } from "./RecruitingVideo";
import { HookScene } from "./scenes/HookScene";
import { TeamScene } from "./scenes/TeamScene";
import { AgeScene } from "./scenes/AgeScene";
import { PositionsScene } from "./scenes/PositionsScene";
import { StatsScene } from "./scenes/StatsScene";
import { OfferScene } from "./scenes/OfferScene";
import { CtaScene, ctaSchema } from "./scenes/CtaScene";

// Vertical 9:16 format for Instagram Reels, TikTok and WhatsApp Status
export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="Scenes">
        <Composition
          id="Hook"
          component={HookScene}
          width={1080}
          height={1920}
          fps={30}
          durationInFrames={75}
        />
        <Composition
          id="Team"
          component={TeamScene}
          width={1080}
          height={1920}
          fps={30}
          durationInFrames={90}
        />
        <Composition
          id="Age"
          component={AgeScene}
          width={1080}
          height={1920}
          fps={30}
          durationInFrames={105}
        />
        <Composition
          id="Positions"
          component={PositionsScene}
          width={1080}
          height={1920}
          fps={30}
          durationInFrames={135}
        />
        <Composition
          id="Stats"
          component={StatsScene}
          width={1080}
          height={1920}
          fps={30}
          durationInFrames={120}
        />
        <Composition
          id="Offer"
          component={OfferScene}
          width={1080}
          height={1920}
          fps={30}
          durationInFrames={120}
        />
        <Composition
          id="CTA"
          component={CtaScene}
          schema={ctaSchema}
          width={1080}
          height={1920}
          fps={30}
          durationInFrames={150}
          defaultProps={{
            trainingWhen: "Training: [Wochentage & Zeit]",
            trainingWhere: "[Trainingsort], Luzern",
            contact: "@luzernlions",
          }}
        />
      </Folder>
      <Composition
        id="RecruitingVideo"
        component={RecruitingVideo}
        schema={ctaSchema}
        width={1080}
        height={1920}
        fps={30}
        durationInFrames={723}
        defaultProps={{
          trainingWhen: "Training: [Wochentage & Zeit]",
          trainingWhere: "[Trainingsort], Luzern",
          contact: "@luzernlions",
        }}
      />
    </>
  );
};
