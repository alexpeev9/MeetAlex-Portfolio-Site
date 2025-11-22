import { ComponentType } from "react";

type SplitSectionProps = {
  sectionId?: string;
  FirstComponent: ComponentType<{ className?: string }>;
  SecondComponent: ComponentType<{ className?: string }>;
  className?: string;
};

const SplitSection = ({
  sectionId,
  FirstComponent,
  SecondComponent,
  className,
}: SplitSectionProps) => {
  const sectionClassName = [
    "mx-auto grid w-full max-w-6xl gap-8 px-4 pt-22 sm:px-6 sm:pt-24 lg:grid-cols-2 lg:px-6 xl:px-0",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div id={sectionId} className={sectionClassName}>
      <FirstComponent className="hidden pt-0 lg:block" />
      <SecondComponent className="pt-0" />
    </div>
  );
};

export default SplitSection;

