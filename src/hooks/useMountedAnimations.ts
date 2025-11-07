import { CSSProperties, useEffect, useState } from 'react';

export const useMountedAnimations = (
  defaultBaseDelay = 0.18,
  step = 0.12,
) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getDelayStyle = (
    index = 0,
    baseDelay = defaultBaseDelay,
  ): CSSProperties | undefined => {
    if (!isMounted) {
      return undefined;
    }

    const delay = Number((baseDelay + step * index).toFixed(2));
    return { animationDelay: `${delay}s` };
  };

  return {
    isMounted,
    getDelayStyle,
  };
};
