import { getCopy } from "@/lib/getCopy";
import { Card } from "@/components/ui/card";
import Button from "@/components/ui/Button";
import FadeContent from "@/components/ui/FadeContent";
import Text from "@/components/ui/Text";
import { ExternalLink } from "lucide-react";

type PortfolioProps = {
  sectionId?: string;
  className?: string;
};

const Portfolio = ({ sectionId, className }: PortfolioProps) => {
  const sectionClassName = [
    "mx-auto w-full max-w-6xl px-4 pt-12 sm:px-6 sm:pt-24 xl:px-0",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const copy = getCopy();
  const portfolio = copy.connect.portfolio;
  const navigation = copy.navigation;

  const projects = [
    {
      title: portfolio.projects.ecommerce.title,
      type: portfolio.projects.ecommerce.type,
      description: portfolio.projects.ecommerce.description,
    },
    {
      title: portfolio.projects.showcase.title,
      type: portfolio.projects.showcase.type,
      description: portfolio.projects.showcase.description,
    },
  ];

  return (
    <section id={sectionId} className={sectionClassName}>
      <FadeContent direction="up" threshold={0.1}>
        <div className="space-y-8 rounded-[1.75rem] border border-(--surface-card-border) bg-(--surface-card) px-4 py-8 [box-shadow:var(--surface-card-shadow)] [backdrop-filter:blur(18px)] lg:p-10">
          <div className="space-y-3">
            <Text variant="heading2">{portfolio.title}</Text>
            <Text variant="body" className="max-w-3xl leading-7">
              {portfolio.description}
            </Text>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <FadeContent
                key={project.title}
                direction="up"
                delay={index * 0.1}
                threshold={0.1}
              >
                <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20">
                  <div className="relative aspect-video overflow-hidden border-b-2 border-(--surface-card-border)">
                    <div className="absolute inset-0 flex items-center justify-center bg-(--accent-muted)">
                      <Text
                        variant="heading3"
                        className="text-(--text-muted) opacity-50"
                      >
                        {portfolio.placeholderText}
                      </Text>
                    </div>
                  </div>

                  <div className="p-6">
                    <Text variant="heading3" className="mb-2">
                      {project.title}
                    </Text>

                    <div className="mb-4 flex gap-2">
                      <span className="rounded-lg border border-(--surface-card-border) px-3 py-1 text-sm font-medium text-(--text-secondary)">
                        {project.type}
                      </span>
                      <Button
                        href={navigation.ctaUrl}
                        ariaLabel={`${portfolio.viewSiteButton}: ${project.title}`}
                        buttonType="primary"
                        size="sm"
                        className="gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {portfolio.viewSiteButton}
                      </Button>
                    </div>

                    <Text variant="bodySmall" className="text-(--text-secondary)">
                      {project.description}
                    </Text>
                  </div>
                </Card>
              </FadeContent>
            ))}
          </div>
        </div>
      </FadeContent>
    </section>
  );
};

export default Portfolio;
