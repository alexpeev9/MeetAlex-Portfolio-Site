import { CopyShape } from "@/lib/getCopy";

type CvSalaryProps = {
  salary: CopyShape["cv"]["salary"];
  sectionId?: string;
  className?: string;
};

const CvSalary = ({ salary, sectionId, className }: CvSalaryProps) => {
  const sectionClassName = [
    "mx-auto w-full max-w-6xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:px-12",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={sectionId} className={sectionClassName}>
      <div className="space-y-3 rounded-[1.75rem] border border-(--surface-card-border) bg-(--surface-card) p-10 [backdrop-filter:blur(18px)] [box-shadow:var(--surface-card-shadow)]">
        <h2 className="text-2xl font-semibold text-(--text-primary) md:text-3xl">
          {salary.title}
        </h2>
        <p className="text-sm leading-6 text-(--text-secondary)">
          {salary.note}
        </p>
      </div>
    </section>
  );
};

export default CvSalary;
