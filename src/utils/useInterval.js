import { useEffect, useRef } from 'react';

function useInterval(callback, period) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function cycle() {
      savedCallback.current();
    }
    if (period !== null) {
      const id = setInterval(cycle, period);
      return () => clearInterval(id);
    }
  }, [period]);
}

export default useInterval;
