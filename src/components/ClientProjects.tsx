"use client";

import { getCopy } from "../lib/getCopy";
import Button from "./ui/Button";
import ImageCarousel from "./ui/ImageCarousel";
import Text from "./ui/Text";
import SpotlightCard from "./ui/SpotlightCard";
import FadeContent from "./ui/FadeContent";

type ProjectsProps = {
  sectionId?: string;
  className?: string;
};

const ClientProjects = ({ sectionId, className }: ProjectsProps) => {
  const sectionClassName = [
    "mx-auto w-full max-w-6xl px-4 pt-22 sm:px-6 sm:pt-24 xl:px-0",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const projects = getCopy().cv.projects;

  return (
    <section id={sectionId} className={sectionClassName}>
      <FadeContent direction="up" threshold={0.1}>
        <div className="space-y-6 rounded-[1.75rem] border border-(--surface-card-border) bg-(--surface-card) px-4 py-8 [box-shadow:var(--surface-card-shadow)] [backdrop-filter:blur(18px)] lg:p-10">
          <div className="space-y-3">
            <Text variant="heading2">{projects.title}</Text>
            <Text variant="body" className="max-w-3xl leading-7">
              {projects.description}
            </Text>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.items.map((project, index) => (
              <FadeContent
                key={project.name}
                direction="up"
                delay={index * 0.1}
                threshold={0.1}
              >
                <SpotlightCard className="h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-xl border border-(--surface-card-border) bg-white/10 transition-all duration-300 hover:border-blue-200/60 [backdrop-filter:blur(12px)]">
                    {/* Preview Area */}
                    {project.image && (
                      <ImageCarousel
                        images={
                          Array.isArray(project.image)
                            ? project.image
                            : [project.image]
                        }
                        alt={`${project.name} preview`}
                        aspectRatio="1000/492"
                      />
                    )}

                    {/* Content Area */}
                    <div className="flex flex-1 flex-col space-y-4 bg-(--surface-card) p-6">
                      <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
                        <Text variant="heading3">{project.name}</Text>
                        {project.year && (
                          <Text
                            variant="caption"
                            className="self-end whitespace-nowrap"
                          >
                            {project.year}
                          </Text>
                        )}
                      </div>

                      {/* Description */}
                      <Text variant="bodySmall" className="flex-1 leading-7">
                        {project.description}
                      </Text>

                      {/* Buttons */}
                      <div className="flex flex-wrap gap-3">
                        {project.viewLink && (
                          <Button
                            href={project.viewLink}
                            ariaLabel={`${project.viewLinkLabel}: ${project.name}`}
                            buttonType="primary"
                            disabled={project.viewLinkDisabled}
                            className="transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                          >
                            {project.viewLinkLabel}
                          </Button>
                        )}
                      </div>
                    </div>
                  </article>
                </SpotlightCard>
              </FadeContent>
            ))}

            {/* NDA Projects Card */}
            {projects.nda && (
              <FadeContent
                direction="up"
                delay={projects.items.length * 0.1}
                threshold={0.1}
              >
                <SpotlightCard className="h-full" spotlightColor="rgba(30, 111, 232, 0.1)">
                  <article className="flex h-full flex-col overflow-hidden rounded-xl border border-(--surface-card-border) bg-white/10 transition-all duration-300 hover:border-blue-200/60 [backdrop-filter:blur(12px)]">
                    {/* Content Area */}
                    <div className="flex flex-1 flex-col justify-between space-y-4 bg-(--surface-card) p-6">
                      <div>
                        <Text variant="heading3" className="mb-3">
                          {projects.nda.title}
                        </Text>
                        <Text variant="bodySmall" className="leading-7">
                          {projects.nda.description}
                        </Text>
                      </div>

                      {/* Schedule Button */}
                      <div>
                        <Button
                          href={projects.nda.ctaUrl}
                          buttonType="primary"
                          ariaLabel={`${projects.nda.cta}: ${projects.nda.title}`}
                          className="transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                        >
                          {projects.nda.cta}
                        </Button>
                      </div>
                    </div>
                  </article>
                </SpotlightCard>
              </FadeContent>
            )}
          </div>
        </div>
      </FadeContent>
    </section>
  );
};

export default ClientProjects;
