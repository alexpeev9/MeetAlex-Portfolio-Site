import Image from "next/image";
import { getCopy } from "../../lib/getCopy";
import Button from "../Button";

type CvProjectsProps = {
  sectionId?: string;
  className?: string;
};

const CvProjects = ({ sectionId, className }: CvProjectsProps) => {
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
          <h2 className="text-2xl font-semibold text-(--text-primary) md:text-3xl">
            {projects.title}
          </h2>
          <p className="max-w-3xl text-base leading-7 text-(--text-secondary)">
            {projects.description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.items.map((project) => (
            <article
              key={project.name}
              className="overflow-hidden rounded-xl border border-(--surface-card-border) bg-white/10 [backdrop-filter:blur(12px)]"
            >
              {/* Preview Area */}
              {project.image && (
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: "1000/492" }}
                >
                  <Image
                    src={project.image}
                    alt={`${project.name} preview`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}

              {/* Content Area */}
              <div className="space-y-4 bg-(--surface-card) p-6">
                <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
                  <h3 className="text-xl font-semibold text-(--text-primary)">
                    {project.name}
                  </h3>
                  {project.year && (
                    <span className="self-end text-xs font-semibold tracking-[0.28em] whitespace-nowrap text-(--text-muted) uppercase">
                      {project.year}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm leading-7 text-(--text-secondary)">
                  {project.description}
                  {/* {project.description2 && (
                    <span className="hidden md:inline">
                      {project.description2}
                    </span>
                  )} */}
                </p>

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
                      {!project.viewLinkDisabled && (
                        <svg
                          className="ml-2 h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      )}
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
                  <h3 className="mb-3 text-xl font-semibold text-(--text-primary)">
                    {projects.nda.title}
                  </h3>
                  <p className="text-sm leading-7 text-(--text-secondary)">
                    {projects.nda.description}
                  </p>
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

export default CvProjects;
