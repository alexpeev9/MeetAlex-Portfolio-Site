import React from "react";
import { getCopy } from "../../lib/getCopy";
import Button from "../ui/Button";

type HeroButtonsProps = {
  className?: string;
};
const HeroButtons: React.FC<HeroButtonsProps> = ({ className }) => {
  const copy = getCopy();
  const { hero, accessibility } = copy;

  return (
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
  );
};

export default HeroButtons;
