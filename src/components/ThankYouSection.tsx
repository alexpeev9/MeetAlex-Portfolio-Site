import { getCopy } from "../lib/getCopy";
import Button from "./ui/Button";
import FadeContent from "./ui/FadeContent";
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
      <FadeContent direction="up" threshold={0.2}>
        <div className="group relative overflow-hidden rounded-[1.75rem] border border-(--surface-card-border) bg-(--surface-card) px-4 py-8 text-center [box-shadow:var(--surface-card-shadow)] [backdrop-filter:blur(18px)] lg:p-10">
          <FadeContent direction="up" delay={0.1}>
            <div className="space-y-3">
              <Text variant="heading2">{thankYou.title}</Text>
              <Text variant="body" className="mx-auto max-w-2xl leading-7">
                {thankYou.description}
              </Text>
            </div>
          </FadeContent>
          <FadeContent direction="up" delay={0.3}>
            <div className="mt-6 flex flex-col items-center gap-4">
              <Button
                href={navigation.ctaUrl}
                ariaLabel={`${navigation.ariaItemPrefix} ${navigation.cta}`}
                buttonType="primary"
                size="lg"
              >
                {thankYou.cta}
              </Button>
            </div>
          </FadeContent>
        </div>
      </FadeContent>
    </section>
  );
};

export default ThankYouSection;
