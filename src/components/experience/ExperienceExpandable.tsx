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
      <summary className="flex cursor-pointer list-none justify-center [&::-webkit-details-marker]:hidden">
        <span className="inline-flex items-center justify-center rounded-full border border-(--accent-primary) bg-transparent px-6 py-2 text-sm font-semibold text-(--accent-primary) transition-all duration-300 ease-out group-open:hidden group-open:scale-95 group-open:opacity-0 hover:-translate-y-0.5 hover:bg-(--accent-primary)/10 focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset) focus-visible:outline-none">
          {showMoreText}
        </span>
      </summary>
      <div className="grid max-h-0 gap-7 overflow-hidden opacity-0 transition-[max-height,opacity] duration-700 ease-in-out will-change-[max-height,opacity] group-open:max-h-[5000px] group-open:opacity-100">
        {remainingRoles.map((role, index) => (
          <div
            key={`${role.title}-${role.company}`}
            className="-translate-y-6 scale-95 transform-gpu opacity-0 transition-all duration-700 ease-in-out will-change-[transform,opacity,scale] group-open:translate-y-0 group-open:scale-100 group-open:opacity-100"
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

