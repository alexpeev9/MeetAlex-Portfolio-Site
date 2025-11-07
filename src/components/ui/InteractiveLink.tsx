import { AnchorHTMLAttributes, KeyboardEvent, MouseEvent } from 'react';
import { handleKeyboardActivation } from '@/utils/navigation';

type InteractiveLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  onActivate: () => void;
};

const InteractiveLink = ({
  onActivate,
  tabIndex,
  href,
  ...restProps
}: InteractiveLinkProps) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onActivate();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLAnchorElement>) => {
    handleKeyboardActivation(event, onActivate);
  };

  return (
    <a
      {...restProps}
      href={href}
      tabIndex={tabIndex ?? 0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    />
  );
};

export default InteractiveLink;
