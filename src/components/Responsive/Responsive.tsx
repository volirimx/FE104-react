import { PropsWithChildren, useLayoutEffect, useState } from "react";

interface Responsive {
  min: number;
  max: number;
}

export const Responsive = ({
  min,
  max,
  children,
}: PropsWithChildren<Responsive>) => {
  const [shouldRender, setShouldRender] = useState<boolean>(false);

  useLayoutEffect(() => {
    (() => {
      if (window.innerWidth >= min && window.innerWidth <= max) {
        setShouldRender(true);
      } else {
        setShouldRender(false);
      }
    })();
  }, []);

  return shouldRender ? children : null;
};
