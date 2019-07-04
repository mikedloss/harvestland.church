import { useEffect, useRef } from 'react';

export const useClickAway = (ref, onClickAway) => {
  const savedCallback = useRef(onClickAway);

  useEffect(
    () => {
      // this gets saved so that, on ref click, it does the thing it's supposed to.
      // if we click the ref with the callback passed in directly, then the action
      // won't call correctly.
      savedCallback.current = onClickAway;
    },
    [onClickAway]
  );

  useEffect(
    () => {
      const handler = (event) => {
        const { current: el } = ref;

        // if we have an element, AND
        // the element does not contain event.target (DOM target), THEN
        // call the saved callback event
        el && !el.contains(event.target) && savedCallback.current(event);
      };

      document.addEventListener('mousedown', handler);
      document.addEventListener('touchStart', handler);

      return () => {
        document.removeEventListener('mousedown', handler);
        document.removeEventListener('touchStart', handler);
      };
    },
    [ref]
  );
};
