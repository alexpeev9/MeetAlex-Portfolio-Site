import { CSSProperties } from 'react';
import Link from 'next/link';
import styles from '@/app/cv/page.module.css';
import { CopyShape } from '@/lib/getCopy';

const HIRE_PATH = '/hire';

type CvHeaderProps = {
  bio: CopyShape['cv']['bio'];
  contact: CopyShape['cv']['contact'];
  accessibility: CopyShape['cv']['accessibility'];
  isMounted: boolean;
  getDelayStyle: (index?: number, baseDelay?: number) => CSSProperties | undefined;
};

const CvHeader = ({ bio, contact, accessibility, isMounted, getDelayStyle }: CvHeaderProps) => {
  return (
    <section className={`${styles.section} ${isMounted ? styles.fadeInUp : ''}`} style={getDelayStyle(0, 0.12)}>
      <div className={`${styles.card} space-y-6`}>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-50 md:text-4xl">{bio.name}</h1>
            <p className="text-lg text-sky-300">{bio.title}</p>
          </div>
          <Link
            href={HIRE_PATH}
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-sky-400"
          >
            View Hiring Info
          </Link>
        </div>
        <p className="max-w-3xl text-base leading-7 text-slate-300">{bio.summary}</p>
        <div className={styles.links}>
          <div className="grid gap-2 text-sm text-slate-300 md:grid-cols-2">
            <span>
              <strong className="text-slate-100">{contact.phoneLabel}:</strong> {contact.phone}
            </span>
            <Link
              href={`mailto:${contact.email}`}
              className={styles.linkItem}
              aria-label={`${accessibility.contactLink}: ${contact.emailLabel}`}
            >
              <span>{contact.emailLabel}:</span>
              <span>{contact.email}</span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href={contact.linkedin}
              className={styles.linkItem}
              aria-label={`${accessibility.contactLink}: LinkedIn`}
            >
              LinkedIn
            </Link>
            <Link
              href={contact.github}
              className={styles.linkItem}
              aria-label={`${accessibility.contactLink}: GitHub`}
            >
              GitHub
            </Link>
            <span className="text-sm text-slate-400">{bio.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CvHeader;
