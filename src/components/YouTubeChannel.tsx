import { getCopy } from "../lib/getCopy";
import Button from "./ui/Button";
import Text from "./ui/Text";

type YouTubeChannelProps = {
  sectionId?: string;
  className?: string;
};

const YouTubeChannel = ({ sectionId, className }: YouTubeChannelProps) => {
  const sectionClassName = [
    "mx-auto w-full max-w-6xl px-0 sm:px-0",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const copy = getCopy();
  const youtubeChannel = copy.cv.youtubeChannel;
  const contact = copy.cv.contact;

  return (
    <section id={sectionId} className={sectionClassName}>
      <div className="h-full space-y-6 rounded-[1.75rem] border border-(--surface-card-border) bg-(--surface-card) px-4 py-8 [box-shadow:var(--surface-card-shadow)] [backdrop-filter:blur(18px)] lg:p-10">
        <div className="space-y-2 mb-3">
          <Text variant="heading2">{youtubeChannel.title}</Text>
          <Text variant="body" className="max-w-3xl leading-7">
            {youtubeChannel.description}
          </Text>
        </div>
        <ul className="list-disc space-y-2 pl-5 mb-4">
          {youtubeChannel.topics.map((topic) => (
            <li key={topic}>
              <Text variant="bodySmall">{topic}</Text>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-4">
          <Button
            href={contact.youtube}
            ariaLabel={youtubeChannel.ctaLabel}
            buttonType="primary"
            size="md"
          >
            {youtubeChannel.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default YouTubeChannel;

