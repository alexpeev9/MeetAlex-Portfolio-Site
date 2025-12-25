import { formatPeriodWithDuration } from "@/lib/utils";
import Image from "next/image";
import Tag from "../ui/Tag";
import Text from "../ui/Text";

type Role = {
  title: string;
  company: string;
  link?: string;
  startDate: string;
  endDate: string | null;
  logo?: string;
  description?: string;
  highlights: string[];
  stack: string[];
};

type ExperienceRoleProps = {
  role: Role;
  ariaLabel: string;
};

const ExperienceRole = ({ role, ariaLabel }: ExperienceRoleProps) => {
  return (
    <article className="relative space-y-3 pb-2" aria-label={ariaLabel}>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          {role.logo && (
            <Image
              src={role.logo}
              alt={`${role.company} logo`}
              width={48}
              height={48}
              className="h-12 w-12 rounded-lg object-contain"
            />
          )}
          <div>
            <Text variant="heading3">{role.title}</Text>
            {role.link ? (
              <a
                href={role.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-(--text-accent)"
              >
                <Text variant="label">{role.company}</Text>
              </a>
            ) : (
              <Text variant="label">{role.company}</Text>
            )}
          </div>
        </div>
        <Text variant="caption">
          {formatPeriodWithDuration(role.startDate, role.endDate)}
        </Text>
      </div>
      {role.description && (
        <Text variant="bodySmall" className="leading-6">
          {role.description}
        </Text>
      )}
      <ul className="list-disc space-y-2 pl-5">
        {role.highlights.map((highlight) => (
          <li key={`${role.title}-${highlight}`}>
            <Text variant="bodySmall">{highlight}</Text>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {role.stack.map((item) => (
          <Tag key={item} variant="default">
            {item}
          </Tag>
        ))}
      </div>
    </article>
  );
};

export default ExperienceRole;
