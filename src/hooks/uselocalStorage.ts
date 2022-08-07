import { useEffect, useState } from "react";

const useLocalStorage = <T>(val: T | (() => T), key: string) => {
  const [value, setValue] = useState<T>(val);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));

    return () => {
      localStorage.removeItem(key);
    };
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
};

export default useLocalStorage;
