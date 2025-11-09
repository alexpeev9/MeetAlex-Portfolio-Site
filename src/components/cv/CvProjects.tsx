import styles from "@/app/cv/page.module.css";
import { CopyShape } from "@/lib/getCopy";
import Link from "next/link";

type CvProjectsProps = {
  projects: CopyShape["cv"]["projects"];
  accessibility: CopyShape["cv"]["accessibility"];
  sectionId?: string;
  className?: string;
};

const CvProjects = ({ projects, accessibility, sectionId, className }: CvProjectsProps) => {
  const sectionClassName = [styles.section, styles.fadeInUp, className]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={sectionId} className={sectionClassName}>
      <div className={`${styles.card} space-y-6`}>
        <h2 className={`text-2xl font-semibold md:text-3xl ${styles.heading}`}>
          {projects.title}
        </h2>
        <div className="grid gap-4">
          {projects.items.map((project) => (
            <article key={project.name} className="space-y-3">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className={`text-lg font-semibold ${styles.heading}`}>
                  {project.name}
                </h3>
                <Link
                  href={project.link}
                  className={styles.linkItem}
                  aria-label={`${accessibility.projectLink}: ${project.name}`}
                >
                  GitHub
                </Link>
              </div>
              <p className={`text-sm ${styles.bodyText}`}>
                {project.description}
              </p>
              <div className={styles.tagList}>
                {project.stack.map((tech) => (
                  <span key={tech} className={styles.tag}>
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
