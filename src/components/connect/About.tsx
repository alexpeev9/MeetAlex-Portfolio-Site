import { getCopy } from "@/lib/getCopy";
import { Card } from "@/components/ui/card";
import FadeContent from "@/components/ui/FadeContent";
import Text from "@/components/ui/Text";
import { Lock, Puzzle, Rocket, Zap } from "lucide-react";

type AboutProps = {
  sectionId?: string;
  className?: string;
};

const About = ({ sectionId, className }: AboutProps) => {
  const sectionClassName = [
    "mx-auto w-full max-w-6xl px-4 pt-12 sm:px-6 sm:pt-24 xl:px-0",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const copy = getCopy();
  const about = copy.connect.about;

  const features = [
    {
      title: about.features.customMade.title,
      description: about.features.customMade.description,
      icon: Puzzle,
    },
    {
      title: about.features.fastDelivery.title,
      description: about.features.fastDelivery.description,
      icon: Zap,
    },
    {
      title: about.features.fastSite.title,
      description: about.features.fastSite.description,
      icon: Rocket,
    },
    {
      title: about.features.bestSecurity.title,
      description: about.features.bestSecurity.description,
      icon: Lock,
    },
  ];

  return (
    <section id={sectionId} className={sectionClassName}>
      <FadeContent direction="up" threshold={0.1}>
        <div className="space-y-8 rounded-[1.75rem] border border-(--surface-card-border) bg-(--surface-card) px-4 py-8 [box-shadow:var(--surface-card-shadow)] [backdrop-filter:blur(18px)] lg:p-10">
          <div className="space-y-3">
            <Text variant="heading2">{about.title}</Text>
            <Text variant="body" className="max-w-3xl leading-7">
              {about.description}
            </Text>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <FadeContent
                  key={feature.title}
                  direction="up"
                  delay={index * 0.1}
                  threshold={0.1}
                >
                  <Card
                    className="group relative overflow-hidden p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20"
                    tabIndex={0}
                    role="article"
                    aria-label={`${feature.title}: ${feature.description}`}
                  >
                    <div className="absolute inset-0 rounded-[1.75rem] border-2 border-transparent transition-all duration-300 group-hover:border-(--surface-card-border)" />
                    <div className="relative z-10">
                      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-(--accent-primary) shadow-lg transition-shadow group-hover:shadow-blue-500/30">
                        <Icon className="h-8 w-8 text-(--action-text)" />
                      </div>

                      <Text variant="heading3" className="mb-3">
                        {feature.title}
                      </Text>
                      <Text
                        variant="bodySmall"
                        className="text-(--text-secondary)"
                      >
                        {feature.description}
                      </Text>
                    </div>
                  </Card>
                </FadeContent>
              );
            })}
          </div>
        </div>
      </FadeContent>
    </section>
  );
};

export default About;
