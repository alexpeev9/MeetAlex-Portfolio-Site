import Image from "next/image";

type CvEducationImageProps = {
  className?: string;
};

const CvEducationImage = ({  className }: CvEducationImageProps) => {
  const sectionClassName = ["mx-auto w-full max-w-6xl px-4 sm:px-0", className]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClassName}>
      <div className="h-full space-y-6 rounded-[1.75rem] border border-(--surface-card-border) bg-(--surface-card) p-10 [box-shadow:var(--surface-card-shadow)] [backdrop-filter:blur(18px)] overflow-hidden">
        <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden">
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

export default CvEducationImage;

