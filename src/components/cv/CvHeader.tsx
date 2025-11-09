import styles from "@/app/cv/page.module.css";
import { CopyShape } from "@/lib/getCopy";
import Image from "next/image";
import Link from "next/link";

const HIRE_PATH = "/hire";

type CvHeaderProps = {
  bio: CopyShape["cv"]["bio"];
  contact: CopyShape["cv"]["contact"];
  accessibility: CopyShape["cv"]["accessibility"];
  sectionId?: string;
  className?: string;
};

const CvHeader = ({
  bio,
  contact,
  accessibility,
  sectionId,
  className,
}: CvHeaderProps) => {
  const sectionClassName = [styles.section, styles.fadeInUp, className]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={sectionId} className={sectionClassName}>
      <div className={`${styles.card} space-y-6`}>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
          <div className={`order-1 md:order-2 flex-1 space-y-4`}>
            <div className="flex flex-col gap-3 md:items-start">
              <h1
                className={`text-3xl font-semibold md:text-4xl ${styles.heading}`}
              >
                {bio.name}
              </h1>
              <p className={`text-lg ${styles.subheading}`}>{bio.title}</p>
              <Link
                href={HIRE_PATH}
                className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5 ${styles.accentButton}`}
                tabIndex={0}
              >
                {contact.hireCta}
              </Link>
            </div>
            <p className={`max-w-3xl text-base leading-7 ${styles.bodyText}`}>
              {bio.summary}
            </p>
          </div>
          <div className={`order-2 md:order-1 ${styles.profileImageWrapper}`}>
            <Image
              src="/alexpeev9.webp"
              alt={bio.name}
              width={240}
              height={240}
              className={styles.profileImage}
              priority
            />
          </div>
        </div>
        <div className={styles.links}>
          <div
            className={`grid gap-2 text-sm md:grid-cols-2 ${styles.bodyText}`}
          >
            <span>
              <strong className={styles.heading}>{contact.phoneLabel}:</strong>{" "}
              {contact.phone}
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
              tabIndex={0}
            >
              LinkedIn
            </Link>
            <Link
              href={contact.github}
              className={styles.linkItem}
              aria-label={`${accessibility.contactLink}: GitHub`}
              tabIndex={0}
            >
              GitHub
            </Link>
            <span className={`text-sm ${styles.metaText}`}>{bio.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CvHeader;
