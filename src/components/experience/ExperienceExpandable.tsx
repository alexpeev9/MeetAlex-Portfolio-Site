import { getCopy } from "../../lib/getCopy";
import ExperienceRole from "./ExperienceRole";

type Role = {
  title: string;
  company: string;
  link?: string;
  period: string;
  logo?: string;
  description?: string;
  highlights: string[];
  stack: string[];
};

type ExperienceExpandableProps = {
  remainingRoles: Role[];
  initialRolesCount: number;
  totalRoles: number;
  ariaLabel: string;
};

const ExperienceExpandable = ({
  remainingRoles,
  initialRolesCount,
  totalRoles,
  ariaLabel,
}: ExperienceExpandableProps) => {
  const copy = getCopy();
  const showMoreText = copy.cv.experience.showMore;

  return (
    <details className="group">
      <summary className="flex cursor-pointer list-none justify-center pt-4 [&::-webkit-details-marker]:hidden">
        <span className="inline-flex items-center justify-center rounded-full border border-(--accent-primary) bg-transparent px-6 py-2 text-sm font-semibold text-(--accent-primary) transition-all duration-300 ease-out group-open:scale-95 group-open:opacity-0 group-open:hidden hover:-translate-y-0.5 hover:bg-(--accent-primary)/10 focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset) focus-visible:outline-none">
          {showMoreText}
        </span>
      </summary>
      <div className="grid gap-7 overflow-hidden will-change-[max-height,opacity] transition-[max-height,opacity] duration-700 ease-in-out group-open:max-h-[5000px] group-open:opacity-100 max-h-0 opacity-0">
        {remainingRoles.map((role, index) => (
          <div
            key={`${role.title}-${role.company}`}
            className="transform-gpu will-change-[transform,opacity,scale] transition-all duration-700 ease-in-out -translate-y-6 scale-95 opacity-0 group-open:translate-y-0 group-open:scale-100 group-open:opacity-100"
            style={{
              transitionDelay: `${index * 80 + 100}ms`,
            }}
          >
            <ExperienceRole
              role={role}
              index={initialRolesCount + index}
              total={totalRoles}
              ariaLabel={ariaLabel}
            />
          </div>
        ))}
      </div>
    </details>
  );
};

export default ExperienceExpandable;

