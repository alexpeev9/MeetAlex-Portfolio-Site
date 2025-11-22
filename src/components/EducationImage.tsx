import Image from "next/image";

type EducationImageProps = {
  className?: string;
};

const EducationImage = ({  className }: EducationImageProps) => {
  const sectionClassName = ["mx-auto w-full max-w-6xl px-4 sm:px-0", className]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClassName}>
      <div className="h-full space-y-6 overflow-hidden rounded-[1.75rem] border border-(--surface-card-border) bg-(--surface-card) px-4 py-8 [box-shadow:var(--surface-card-shadow)] [backdrop-filter:blur(18px)] lg:p-10">
        <div className="relative h-full min-h-[400px] overflow-hidden rounded-xl">
          <Image
            src="/images/education/school.webp"
            alt="School building"
            objectFit="cover"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default EducationImage;

