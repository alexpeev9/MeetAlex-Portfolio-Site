import React from "react";
import { getCopy } from "../../lib/getCopy";
import Button from "../Button";
import Text from "../ui/Text";

type HeroHeadlineProps = {
  className?: string;
};
const HeroHeadline: React.FC<HeroHeadlineProps> = ({ className }) => {
  const copy = getCopy();
  const { hero, accessibility } = copy;

  return (
    <>
      <div
        className={`flex flex-col items-center gap-6 lg:items-start ${className}`}
      >
        <span className="hidden w-fit items-center gap-3 rounded-full border border-blue-200 bg-white/70 px-5 py-2 text-xs font-semibold tracking-[0.32em] text-blue-500 uppercase shadow-sm lg:inline-flex">
          {hero.eyebrow}
        </span>
        <Text variant="heading1" className="text-center leading-tight lg:text-left">
          {hero.headline}
          <br />
          {hero.headline2}
        </Text>
        <Text
          variant="body"
          size="lg"
          className="max-w-2xl leading-8 md:text-xl"
        >
          {hero.subheadline}
          <br />
          <span className="hidden lg:block">{hero.subheadline2}</span>
        </Text>
      </div>
      <div
        className={`flex flex-wrap items-center justify-center gap-4 lg:justify-start ${className}`}
      >
        <Button
          href={hero.primaryCtaUrl}
          ariaLabel={accessibility.primaryCta}
          buttonType="primary"
          size="lg"
          isExternal={false}
          className="w-68 tracking-[0.2em] uppercase"
        >
          {hero.primaryCta}
        </Button>
        <Button
          href={hero.secondaryCtaUrl}
          ariaLabel={accessibility.secondaryCta}
          buttonType="secondary"
          size="lg"
          isExternal={false}
          className="w-68 tracking-[0.2em] uppercase"
        >
          {hero.secondaryCta}
        </Button>
      </div>
    </>
  );
};

export default HeroHeadline;
