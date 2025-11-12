import { CopyShape } from "@/lib/getCopy";
import Link from "next/link";

type CvProjectsProps = {
  projects: CopyShape["cv"]["projects"];
  accessibility: CopyShape["cv"]["accessibility"];
  sectionId?: string;
  className?: string;
};

const CvProjects = ({ projects, accessibility, sectionId, className }: CvProjectsProps) => {
  const sectionClassName = [
    "mx-auto w-full max-w-6xl px-4 pt-12 sm:px-6 sm:pt-16 lg:px-12",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={sectionId} className={sectionClassName}>
      <div className="space-y-6 rounded-[1.75rem] border border-(--surface-card-border) bg-(--surface-card) p-10 [backdrop-filter:blur(18px)] [box-shadow:var(--surface-card-shadow)]">
        <h2 className="text-2xl font-semibold text-(--text-primary) md:text-3xl">
          {projects.title}
        </h2>
        <div className="grid gap-4">
          {projects.items.map((project) => (
            <article key={project.name} className="space-y-3">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold text-(--text-primary)">
                  {project.name}
                </h3>
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm text-(--text-accent) transition duration-300 hover:translate-x-1 hover:text-(--text-accent-strong) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset)"
                  aria-label={`${accessibility.projectLink}: ${project.name}`}
                >
                  GitHub
                </Link>
              </div>
              <p className="text-sm text-(--text-secondary)">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center justify-center rounded-full border border-(--accent-primary) bg-(--accent-tag-bg) px-4 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-(--text-accent-strong)"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CvProjects;
