import { getCopy } from "../../lib/getCopy";
import Button from "../ui/Button";
import ImageCarousel from "../ui/ImageCarousel";
import Text from "../ui/Text";

type CvProjectsProps = {
  sectionId?: string;
  className?: string;
};

const CvClientProjects = ({ sectionId, className }: CvProjectsProps) => {
  const sectionClassName = [
    "mx-auto w-full max-w-6xl px-4 pt-22 sm:px-6 sm:pt-24 xl:px-0",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const projects = getCopy().cv.projects;

  return (
    <section id={sectionId} className={sectionClassName}>
      <div className="space-y-6 rounded-[1.75rem] border border-(--surface-card-border) bg-(--surface-card) px-4 py-8 [box-shadow:var(--surface-card-shadow)] [backdrop-filter:blur(18px)] lg:p-10">
        <div className="space-y-3">
          <Text variant="heading2">{projects.title}</Text>
          <Text variant="body" className="max-w-3xl leading-7">
            {projects.description}
          </Text>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.items.map((project) => (
            <article
              key={project.name}
              className="overflow-hidden rounded-xl border border-(--surface-card-border) bg-white/10 [backdrop-filter:blur(12px)]"
            >
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
              <div className="space-y-4 bg-(--surface-card) p-6">
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
                <Text variant="bodySmall" className="leading-7">
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
                    >
                      {project.viewLinkLabel}
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}

          {/* NDA Projects Card */}
          {projects.nda && (
            <article className="flex flex-col overflow-hidden rounded-xl border border-(--surface-card-border) bg-white/10 [backdrop-filter:blur(12px)]">
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
                  >
                    {projects.nda.cta}
                  </Button>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
};

export default CvClientProjects;
