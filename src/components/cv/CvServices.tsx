import { CopyShape } from "@/lib/getCopy";

type CvServicesProps = {
  services: CopyShape["cv"]["services"];
  accessibility: CopyShape["cv"]["accessibility"];
  sectionId?: string;
  className?: string;
};

const CvServices = ({ services, accessibility, sectionId, className }: CvServicesProps) => {
  const sectionClassName = [
    "mx-auto w-full max-w-6xl px-4 pt-22 sm:px-6 sm:pt-24 xl:px-0",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={sectionId} className={sectionClassName}>
      <div className="space-y-8 rounded-[1.75rem] border border-(--surface-card-border) bg-(--surface-card) p-10 [backdrop-filter:blur(18px)] [box-shadow:var(--surface-card-shadow)]">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-(--text-primary) md:text-3xl">
            {services.title}
          </h2>
          <p className="text-(--text-secondary)">{services.intro}</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {services.items.map((service) => (
            <article
              key={service.title}
              className="space-y-3 rounded-xl border border-(--surface-card-border) bg-white/10 p-7 [backdrop-filter:blur(12px)]"
              aria-label={`${accessibility.serviceCard}: ${service.title}`}
            >
              <h3 className="text-lg font-semibold text-(--text-primary)">
                {service.title}
              </h3>
              <p className="text-(--text-secondary)">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CvServices;
