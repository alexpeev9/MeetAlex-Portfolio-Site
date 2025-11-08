import { CSSProperties } from 'react';
import Link from 'next/link';
import styles from '@/app/cv/page.module.css';
import { CopyShape } from '@/lib/getCopy';

type CvProjectsProps = {
  projects: CopyShape['cv']['projects'];
  accessibility: CopyShape['cv']['accessibility'];
  isMounted: boolean;
  getDelayStyle: (index?: number, baseDelay?: number) => CSSProperties | undefined;
};

const CvProjects = ({ projects, accessibility, isMounted, getDelayStyle }: CvProjectsProps) => {
  return (
    <section className={`${styles.section} ${isMounted ? styles.fadeInUp : ''}`} style={getDelayStyle(0, 0.28)}>
      <div className={`${styles.card} space-y-6`}>
        <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">{projects.title}</h2>
        <div className="grid gap-4">
          {projects.items.map((project, index) => (
            <article key={project.name} className="space-y-3">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold text-slate-100">{project.name}</h3>
                <Link
                  href={project.link}
                  className={styles.linkItem}
                  aria-label={`${accessibility.projectLink}: ${project.name}`}
                >
                  GitHub
                </Link>
              </div>
              <p className="text-sm text-slate-300">{project.description}</p>
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
