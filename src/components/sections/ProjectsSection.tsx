import { CSSProperties } from 'react';
import Image from 'next/image';
import styles from '@/app/page.module.css';
import { CopyShape } from '@/lib/getCopy';
import InteractiveLink from '@/components/ui/InteractiveLink';

type ProjectsSectionProps = {
  portfolio: CopyShape['portfolio'];
  projectLinkLabel: string;
  isMounted: boolean;
  getDelayStyle: (index?: number, baseDelay?: number) => CSSProperties | undefined;
  onProjectAction: (url: string) => void;
};

const ProjectsSection = ({
  portfolio,
  projectLinkLabel,
  isMounted,
  getDelayStyle,
  onProjectAction,
}: ProjectsSectionProps) => {
  return (
    <section id="projects" className={`${styles.section} space-y-10`}>
      <div className={`space-y-4 ${isMounted ? styles.fadeInUp : ''}`}>
        <h2 className="text-3xl font-semibold text-slate-50 md:text-4xl">{portfolio.title}</h2>
        <p className="max-w-3xl text-lg leading-7 text-slate-300">{portfolio.description}</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        {portfolio.projects.map((project, index) => (
          <article
            key={project.name}
            className={`${styles.projectCard} ${isMounted ? styles.fadeInUp : ''}`}
            style={getDelayStyle(index, 0.2)}
          >
            <div className={`${styles.projectMedia} ${styles.float}`}>
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                width={420}
                height={260}
                priority={index === 0}
              />
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className={styles.projectTag}>
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-slate-50">{project.name}</h3>
            <p className="mt-4 text-base leading-7 text-slate-300">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              {project.actions.map((action, actionIndex) => (
                <InteractiveLink
                  key={action.label}
                  href={action.url}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-500 hover:text-sky-300"
                  style={getDelayStyle(actionIndex, 0.12)}
                  aria-label={`${projectLinkLabel}: ${action.label}`}
                  onActivate={() => onProjectAction(action.url)}
                >
                  {action.label}
                </InteractiveLink>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
