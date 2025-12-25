"use client";

import { getCopy } from "../lib/getCopy";
import FadeContent from "./ui/FadeContent";
import SpotlightCard from "./ui/SpotlightCard";
import Text from "./ui/Text";

type RecommendationsProps = {
  sectionId?: string;
  className?: string;
};

const Recommendations = ({ sectionId, className }: RecommendationsProps) => {
  const sectionClassName = [
    "mx-auto w-full max-w-6xl px-4 pt-22 sm:px-6 sm:pt-24 xl:px-0",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const copy = getCopy();
  const recommendations = copy.recommendations;

  return (
    <section id={sectionId} className={sectionClassName}>
      <FadeContent direction="up" threshold={0.1}>
        <div className="space-y-6 rounded-[1.75rem] border border-(--surface-card-border) bg-(--surface-card) px-4 py-8 [box-shadow:var(--surface-card-shadow)] [backdrop-filter:blur(18px)] lg:p-10">
          <Text variant="heading2">{recommendations.title}</Text>
          <div className="grid gap-6 md:grid-cols-2">
            {recommendations.items.map((recommendation, index) => (
              <FadeContent
                key={recommendation.name}
                direction="up"
                delay={index * 0.15}
                threshold={0.1}
              >
                <SpotlightCard
                  className="h-full"
                  spotlightColor="rgba(30, 111, 232, 0.12)"
                >
                  <article className="flex h-full flex-col rounded-xl border border-(--surface-card-border) bg-white/10 p-6 [backdrop-filter:blur(12px)] transition-all duration-300 hover:border-blue-200/60">
                    <div className="flex flex-1 flex-col space-y-3">
                      <div>
                        <a
                          href={recommendation.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block rounded transition-colors duration-200 hover:text-(--text-accent) focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset) focus-visible:outline-none"
                          aria-label={`View ${recommendation.name}'s profile`}
                        >
                          <Text
                            variant="heading3"
                            className="wrap-break-word transition-colors duration-200 group-hover:text-(--text-accent)"
                          >
                            {recommendation.name}
                          </Text>
                        </a>
                        <Text
                          variant="bodySmall"
                          className="mt-1 text-(--text-secondary)"
                        >
                          {recommendation.relationship}
                        </Text>
                        <Text variant="caption" className="mt-2 block">
                          {recommendation.date}
                        </Text>
                      </div>
                      <Text
                        variant="bodySmall"
                        className="pb-4 leading-7 text-(--text-secondary)"
                      >
                        &ldquo;{recommendation.text}&rdquo;
                      </Text>
                    </div>
                    <div className="mt-auto border-t border-(--surface-card-border) pt-4">
                      <Text variant="caption" className="text-(--text-muted)">
                        {recommendations.source}
                      </Text>
                    </div>
                  </article>
                </SpotlightCard>
              </FadeContent>
            ))}
          </div>
        </div>
      </FadeContent>
    </section>
  );
};

export default Recommendations;
