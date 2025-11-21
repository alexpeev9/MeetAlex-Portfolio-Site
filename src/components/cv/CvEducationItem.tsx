import Button from "../ui/Button";
import Tag from "../ui/Tag";
import Text from "../ui/Text";

type CvItem = {
  title: string;
  subtitle?: string;
  period?: string;
  description?: string;
  grade?: string;
  linkLabel?: string;
  link?: string;
};

type CvEducationItemProps = {
  item: CvItem;
  linkAriaLabel?: string;
};

const CvEducationItem = ({ item, linkAriaLabel }: CvEducationItemProps) => {
  const { title, subtitle, period, description, grade, linkLabel, link } = item;

  return (
    <div className="space-y-2">
      <div className="flex flex-col gap-1">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <Text variant="heading4">{title}</Text>
            <Text variant="label">{subtitle}</Text>
          </div>
          {grade && (
            <Tag
              variant="default"
              className="hidden whitespace-nowrap lg:inline-flex"
            >
              {grade}
            </Tag>
          )}
        </div>
        <Text variant="caption">{period}</Text>
        {description && <Text variant="bodySmall">{description}</Text>}
      </div>
      {linkLabel && link && (
        <Button
          href={link}
          ariaLabel={
            linkAriaLabel ? `${linkAriaLabel}: ${linkLabel}` : linkLabel
          }
          buttonType="primary"
          size="sm"
        >
          {linkLabel}
        </Button>
      )}
    </div>
  );
};

export default CvEducationItem;
