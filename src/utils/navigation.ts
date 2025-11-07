import { KeyboardEvent } from 'react';

export const scrollToId = (targetId: string) => {
  if (!targetId) {
    return;
  }

  const targetElement = document.getElementById(targetId);
  if (!targetElement) {
    return;
  }

  targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const openInNewTab = (url: string) => {
  if (!url) {
    return;
  }

  window.open(url, '_blank', 'noopener,noreferrer');
};

export const handleKeyboardActivation = (
  event: KeyboardEvent<HTMLElement>,
  callback: () => void,
) => {
  const { key } = event;

  if (key !== 'Enter' && key !== ' ') {
    return;
  }

  event.preventDefault();
  callback();
};
