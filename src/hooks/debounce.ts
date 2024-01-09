import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay: number = 3000): string => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
};

export const useSelectedColor = (language?: string) => {
  const [color, setColor] = useState("");
  switch (language) {
    case "JavaScript":
      setColor("bg-yellow-400");
      break;
    case "TypeScript":
      setColor("bg-blue-400");
      break;
    default:
      setColor("bg-blue-400");
  }
  return color;
};
