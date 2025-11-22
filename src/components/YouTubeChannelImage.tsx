import Image from "next/image";
import { getCopy } from "../lib/getCopy";

type YouTubeChannelImageProps = {
  className?: string;
};

const YouTubeChannelImage = ({ className }: YouTubeChannelImageProps) => {
  const sectionClassName = ["mx-auto w-full max-w-6xl px-4 sm:px-0", className]
    .filter(Boolean)
    .join(" ");

  const copy = getCopy();
  const contact = copy.cv.contact;

  return (
    <section className={sectionClassName}>
      <div className="h-full space-y-6 overflow-hidden rounded-[1.75rem] border border-(--surface-card-border) bg-(--surface-card) px-4 py-8 [box-shadow:var(--surface-card-shadow)] [backdrop-filter:blur(18px)] lg:p-10">
        <a
          href={contact.youtube}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit YouTube channel"
          className="relative block w-full overflow-hidden rounded-xl transition-opacity focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset)"
        >
          <Image
            src="/images/education/youtube.webp"
            alt="YouTube channel preview"
            width={848}
            height={499}
            className="h-auto w-full object-cover"
          />
        </a>
      </div>
    </section>
  );
};

export default YouTubeChannelImage;
