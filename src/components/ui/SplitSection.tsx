import { ComponentType } from "react";
import FadeContent from "./FadeContent";

type SplitSectionProps = {
  sectionId?: string;
  FirstComponent: ComponentType<{ className?: string }>;
  SecondComponent: ComponentType<{ className?: string }>;
  className?: string;
  isSecondComponentHiddenOnMobile?: boolean;
};

const SplitSection = ({
  sectionId,
  FirstComponent,
  SecondComponent,
  className,
  isSecondComponentHiddenOnMobile = false,
}: SplitSectionProps) => {
  const sectionClassName = [
    "mx-auto grid w-full max-w-6xl gap-8 px-4 pt-22 sm:px-6 sm:pt-24 lg:grid-cols-2 lg:px-6 xl:px-0",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <FadeContent direction="up" threshold={0.1}>
      <div id={sectionId} className={sectionClassName}>
        <FirstComponent
          className={
            isSecondComponentHiddenOnMobile ? "pt-0" : "hidden pt-0 lg:block"
          }
        />
        <SecondComponent
          className={
            isSecondComponentHiddenOnMobile ? "hidden pt-0 lg:block" : "pt-0"
          }
        />
      </div>
    </FadeContent>
  );
};

export default SplitSection;

