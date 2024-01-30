export function useSessionStorage<T>(key: string) {
  const setItem = (value: T | string): void => {
    try {
      if (typeof value === 'string') {
        window.sessionStorage.setItem(key, value);
      } else {
        window.sessionStorage.setItem(key, JSON.stringify(value));
      }
    } catch (e) {
      window.console.error(e);
    }
  };

  const getItem = (): T | string | undefined => {
    try {
      const item = window.sessionStorage.getItem(key);
      if (item === null) return undefined;
      return item;
    } catch (e) {
      window.console.error(e);
      return undefined;
    }
  };

  const removeItem = (): void => {
    try {
      window.sessionStorage.removeItem(key);
    } catch (e) {
      window.console.error(e);
    }
  };

  return {
    setItem,
    getItem,
    removeItem,
  };
}