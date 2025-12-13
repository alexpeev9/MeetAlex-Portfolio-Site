import { getCopy } from "../../lib/getCopy";
import Text from "../ui/Text";
import ExperienceExpandable from "./ExperienceExpandable";
import ExperienceRole from "./ExperienceRole";

type ExperienceProps = {
  sectionId?: string;
  className?: string;
};

const Experience = ({ sectionId, className }: ExperienceProps) => {
  const sectionClassName = [
    "mx-auto w-full max-w-6xl px-4 pt-12 sm:px-6 sm:pt-24 xl:px-0",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const copy = getCopy();
  const experience = copy.cv.experience;
  const accessibility = copy.cv.accessibility;

  const initialRoles = experience.roles.slice(0, 4);
  const remainingRoles = experience.roles.slice(4);
  const hasMore = remainingRoles.length > 0;
  const totalRoles =
    initialRoles.length + (hasMore ? remainingRoles.length : 0);

  return (
    <section id={sectionId} className={sectionClassName}>
      <div className="space-y-8 rounded-[1.75rem] border border-(--surface-card-border) bg-(--surface-card) px-4 py-8 [box-shadow:var(--surface-card-shadow)] [backdrop-filter:blur(18px)] lg:p-10">
        <Text variant="heading2">{experience.title}</Text>
        <div className="grid gap-7">
          {initialRoles.map((role, index) => (
            <ExperienceRole
              key={`${role.title}-${role.company}`}
              role={role}
              index={index}
              total={totalRoles}
              ariaLabel={accessibility.experience}
            />
          ))}

          {hasMore && (
            <ExperienceExpandable
              remainingRoles={remainingRoles}
              initialRolesCount={initialRoles.length}
              totalRoles={initialRoles.length + remainingRoles.length}
              ariaLabel={accessibility.experience}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
