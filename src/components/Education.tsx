import { getCopy } from "../lib/getCopy";
import CvEducationItem from "./EducationItem";
import Text from "./ui/Text";

type EducationProps = {
  className?: string;
};

const Education = ({ className }: EducationProps) => {
  const sectionClassName = ["mx-auto w-full max-w-6xl px-0 sm:px-0", className]
    .filter(Boolean)
    .join(" ");
  const copy = getCopy();
  const education = copy.cv.education;
  const accessibility = copy.cv.accessibility;
  const certifications = copy.cv.certifications;

  return (
    <section className={sectionClassName}>
      <div className="h-full space-y-6 rounded-[1.75rem] border border-(--surface-card-border) bg-(--surface-card) px-4 py-8 [box-shadow:var(--surface-card-shadow)] [backdrop-filter:blur(18px)] lg:p-10">
        <Text variant="heading2">{education.title}</Text>
        <div className="grid gap-4">
          {education.items.map((item) => (
            <CvEducationItem
              key={`${item.title}-${item.subtitle}`}
              item={item}
              linkAriaLabel={accessibility.educationLink}
            />
          ))}
        </div>
        <hr className="my-4 h-px border-0 bg-(--text-accent)/20" />
        <Text variant="heading2">{certifications.title}</Text>
        <div className="grid gap-4">
          {certifications.items.map((item) => (
            <CvEducationItem
              key={`${item.title}-${item.subtitle}`}
              item={item}
              linkAriaLabel={accessibility.certificationLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
