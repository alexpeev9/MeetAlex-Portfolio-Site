import { getCopy } from "@/lib/getCopy";
import GlareHover from "@/components/ui/GlareHover";
import FadeContent from "@/components/ui/FadeContent";
import Text from "@/components/ui/Text";
import { Code, Phone, Rocket } from "lucide-react";

type ProcessProps = {
  sectionId?: string;
  className?: string;
};

const Process = ({ sectionId, className }: ProcessProps) => {
  const sectionClassName = [
    "mx-auto w-full max-w-6xl px-4 pt-12 sm:px-6 sm:pt-24 xl:px-0",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const copy = getCopy();
  const process = copy.connect.process;

  const steps = [
    {
      number: process.steps.consultation.number,
      title: process.steps.consultation.title,
      description: process.steps.consultation.description,
      icon: Phone,
    },
    {
      number: process.steps.development.number,
      title: process.steps.development.title,
      description: process.steps.development.description,
      icon: Code,
    },
    {
      number: process.steps.launch.number,
      title: process.steps.launch.title,
      description: process.steps.launch.description,
      icon: Rocket,
    },
  ];

  return (
    <section id={sectionId} className={sectionClassName}>
      <FadeContent direction="up" threshold={0.1}>
        <div className="space-y-8 rounded-[1.75rem] border border-(--surface-card-border) bg-(--surface-card) px-4 py-8 [box-shadow:var(--surface-card-shadow)] [backdrop-filter:blur(18px)] lg:p-10">
          <div className="space-y-3">
            <Text variant="heading2">{process.title}</Text>
            <Text variant="body" className="max-w-3xl leading-7">
              {process.description}
            </Text>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <FadeContent
                  key={step.title}
                  direction="up"
                  delay={index * 0.1}
                  threshold={0.1}
                >
                  <div
                    tabIndex={0}
                    role="article"
                    aria-label={`${step.title}: ${step.description}`}
                    className="focus:outline-none focus:ring-2 focus:ring-(--accent-primary) focus:ring-offset-2 focus:ring-offset-(--surface-card) focus:rounded-[1.75rem]"
                  >
                    <GlareHover
                      minHeight="280px"
                      className="flex flex-col items-center justify-center p-8"
                      glareColor="#3b82f6"
                      glareOpacity={0.12}
                    >
                      <div className="mb-6 flex items-center gap-3">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-(--accent-primary) shadow-lg transition-shadow hover:shadow-blue-500/30">
                          <Icon className="h-8 w-8 text-(--action-text)" />
                        </div>
                        <Text
                          variant="caption"
                          className="text-(--text-accent)"
                        >
                          {step.number}
                        </Text>
                      </div>

                      <Text variant="heading3" className="mb-2 text-center">
                        {step.title}
                      </Text>
                      <Text
                        variant="bodySmall"
                        className="text-center text-(--text-secondary)"
                      >
                        {step.description}
                      </Text>
                    </GlareHover>
                  </div>
                </FadeContent>
              );
            })}
          </div>
        </div>
      </FadeContent>
    </section>
  );
};

export default Process;
