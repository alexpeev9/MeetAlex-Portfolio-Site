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
      <div className="space-y-6 rounded-[1.75rem] border border-(--surface-card-border) bg-(--surface-card) p-10 [box-shadow:var(--surface-card-shadow)] [backdrop-filter:blur(18px)]">
        <h2 className="text-2xl font-semibold text-(--text-primary) md:text-3xl">
          {projects.title}
        </h2>
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
                <h3 className="text-xl font-semibold text-(--text-primary)">
                  {project.name}
                </h3>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3">
                  {/* {project.companyLink && (
                    <Button
                      href={project.companyLink}
                      ariaLabel={`${project.companyLinkLabel}: ${project.name}`}
                      buttonType="outline"
                    >
                      {project.companyLinkLabel}
                    </Button>
                  )} */}
                  {project.viewLink && (
                    <Button
                      href={project.viewLink}
                      ariaLabel={`${project.viewLinkLabel}: ${project.name}`}
                      buttonType="primary"
                    >
                      {project.viewLinkLabel}
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
                    </Button>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm leading-6 text-(--text-secondary)">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CvProjects;
