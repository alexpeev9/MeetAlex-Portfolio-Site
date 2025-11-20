import Link from "next/link";

type CvItem = {
  title: string;
  subtitle?: string;
  period?: string;
  description?: string;
  grade?: string;
  linkLabel?: string;
  link?: string;
};

type CvEducationItemProps = {
  item: CvItem;
  linkAriaLabel?: string;
};

const CvEducationItem = ({ item, linkAriaLabel }: CvEducationItemProps) => {
  const { title, subtitle, period, description, grade, linkLabel, link } =
    item;

  return (
    <div className="space-y-2">
      <div className="flex flex-col gap-1">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-(--text-primary)">
              {title}
            </h3>
            <span className="text-sm text-(--text-accent)">{subtitle}</span>
          </div>
          {grade && (
            <span className="hidden items-center rounded-lg bg-(--text-accent)/10 px-3 py-1 text-xs font-semibold whitespace-nowrap text-(--text-accent) lg:inline-flex">
              {grade}
            </span>
          )}
        </div>
        <span className="text-xs font-semibold tracking-[0.28em] text-(--text-muted) uppercase">
          {period}
        </span>
        {description && (
          <p className="text-sm text-(--text-secondary)">{description}</p>
        )}
      </div>
      {linkLabel && link && (
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-(--text-accent) transition duration-300 hover:translate-x-1 hover:text-(--text-accent-strong) focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset) focus-visible:outline-none"
          aria-label={
            linkAriaLabel ? `${linkAriaLabel}: ${linkLabel}` : linkLabel
          }
        >
          {linkLabel}
        </Link>
      )}
    </div>
  );
};

export default CvEducationItem;

