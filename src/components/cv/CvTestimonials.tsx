import { CopyShape } from "@/lib/getCopy";

type CvTestimonialsProps = {
  testimonials: CopyShape["cv"]["testimonials"];
  accessibility: CopyShape["cv"]["accessibility"];
  sectionId?: string;
  className?: string;
};

const CvTestimonials = ({ testimonials, accessibility, sectionId, className }: CvTestimonialsProps) => {
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
            {testimonials.title}
          </h2>
          <p className="text-(--text-secondary)">{testimonials.intro}</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.items.map((item) => (
            <blockquote
              key={`${item.name}-${item.role}`}
              className="relative rounded-2xl border border-[color:var(--surface-card-border)] bg-white/15 p-8 [box-shadow:var(--surface-card-shadow)]"
              aria-label={`${accessibility.testimonialQuote}: ${item.name}`}
            >
              <p className="text-base leading-7 text-(--text-secondary)">
                “{item.quote}”
              </p>
              <footer className="mt-6 flex flex-col gap-1 text-(--text-accent)">
                <span className="font-semibold text-(--text-primary)">
                  {item.name}
                </span>
                <span className="text-sm text-(--text-tertiary)">
                  {item.role}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CvTestimonials;
