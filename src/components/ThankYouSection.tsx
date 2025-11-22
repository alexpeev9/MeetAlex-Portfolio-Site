import { getCopy } from "../lib/getCopy";
import Button from "./ui/Button";
import Text from "./ui/Text";

type ThankYouSectionProps = {
  sectionId?: string;
  className?: string;
};

const ThankYouSection = ({ sectionId, className }: ThankYouSectionProps) => {
  const sectionClassName = [
    "mx-auto w-full max-w-6xl px-4 pt-22 sm:px-6 sm:pt-24 xl:px-0 pb-6",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const copy = getCopy();
  const thankYou = copy.thankYou;
  const navigation = copy.navigation;

  return (
    <section id={sectionId} className={sectionClassName}>
      <div className="space-y-6 rounded-[1.75rem] border border-(--surface-card-border) bg-(--surface-card) px-4 py-8 text-center [box-shadow:var(--surface-card-shadow)] [backdrop-filter:blur(18px)] lg:p-10">
        <div className="space-y-3">
          <Text variant="heading2">{thankYou.title}</Text>
          <Text variant="body" className="mx-auto max-w-2xl leading-7">
            {thankYou.description}
          </Text>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Button
            href={navigation.ctaUrl}
            ariaLabel={`${navigation.ariaItemPrefix} ${navigation.cta}`}
            buttonType="primary"
            size="lg"
          >
            {thankYou.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ThankYouSection;
