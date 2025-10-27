export const createDebouncer = (timeout: number): () => Promise<boolean> => {
  let lastResolve: null | ((val: boolean) => void) = null;
  let lastTimeoutId: number | null = null;
  return () => {
    if (lastResolve && lastTimeoutId) {
      lastResolve(false);
      clearTimeout(lastTimeoutId);
    }
    return new Promise((resolve) => {
      lastResolve = resolve;
      lastTimeoutId = window.setTimeout(() => {
        resolve(true);
        lastResolve = null;
        lastTimeoutId = null;
      }, timeout);
    });
  };
};
