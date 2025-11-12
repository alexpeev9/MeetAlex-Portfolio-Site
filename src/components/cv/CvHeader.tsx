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
  const sectionClassName = [
    "mx-auto w-full max-w-6xl px-6 pt-16 lg:px-12",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={sectionId} className={sectionClassName}>
      <div className="space-y-6 rounded-[1.75rem] border border-(--surface-card-border) bg-(--surface-card) p-10 [backdrop-filter:blur(18px)] [box-shadow:var(--surface-card-shadow)]">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
          <div className={`order-1 md:order-2 flex-1 space-y-4`}>
            <div className="flex flex-col gap-3 md:items-start">
              <h1
                className="text-3xl font-semibold text-(--text-primary) md:text-4xl"
              >
                {bio.name}
              </h1>
              <p className="text-lg text-(--text-accent)">{bio.title}</p>
              <Link
                href={HIRE_PATH}
                className="inline-flex items-center justify-center rounded-full bg-(--accent-primary) px-5 py-2.5 text-sm font-semibold text-(--action-text) transition-transform duration-300 hover:-translate-y-0.5 hover:bg-(--accent-primary-hover) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset)"
                tabIndex={0}
              >
                {contact.hireCta}
              </Link>
            </div>
            <p className="max-w-3xl text-base leading-7 text-(--text-secondary)">
              {bio.summary}
            </p>
          </div>
          <div className="order-2 aspect-square w-full max-w-[12rem] overflow-hidden rounded-2xl border border-(--surface-card-border) bg-(--surface-card) [box-shadow:var(--surface-card-shadow)] md:order-1">
            <Image
              src="/alexpeev9.webp"
              alt={bio.name}
              width={240}
              height={240}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2 text-sm text-(--text-secondary) md:grid-cols-2">
            <span>
              <strong className="text-(--text-primary)">
                {contact.phoneLabel}:
              </strong>{" "}
              {contact.phone}
            </span>
            <Link
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 text-(--text-accent) transition duration-300 hover:translate-x-1 hover:text-(--text-accent-strong) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset)"
              aria-label={`${accessibility.contactLink}: ${contact.emailLabel}`}
            >
              <span>{contact.emailLabel}:</span>
              <span>{contact.email}</span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href={contact.linkedin}
              className="inline-flex items-center gap-2 text-sm text-(--text-accent) transition duration-300 hover:translate-x-1 hover:text-(--text-accent-strong) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset)"
              aria-label={`${accessibility.contactLink}: LinkedIn`}
              tabIndex={0}
            >
              LinkedIn
            </Link>
            <Link
              href={contact.github}
              className="inline-flex items-center gap-2 text-sm text-(--text-accent) transition duration-300 hover:translate-x-1 hover:text-(--text-accent-strong) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset)"
              aria-label={`${accessibility.contactLink}: GitHub`}
              tabIndex={0}
            >
              GitHub
            </Link>
            <span className="text-sm text-(--text-muted)">{bio.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CvHeader;
