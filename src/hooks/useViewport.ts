import { useEffect, useState } from 'react';

import { Viewport } from 'types/shared';

const getViewport = (): Viewport => {
  const { innerWidth: width } = window;

  if (width < 768) {
    return Viewport.Mobile;
  }

  if (width < 1200) {
    return Viewport.Tablet;
  }

  return Viewport.Desktop;
};

export const useViewport = () => {
  const [viewport, setViewport] = useState(getViewport());

  useEffect(() => {
    const handleResize = () => setViewport(getViewport());

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return viewport;
};
