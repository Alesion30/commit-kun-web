import { createContext } from "react";

export type LoadingContextProps = {
  isLoading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  whileLoading: (func: () => Promise<any>) => void;
  startLoading: () => void;
  endLoading: () => void;
};

export const LoadingContext = createContext<LoadingContextProps>({
  isLoading: true,
  setLoading: () => {},
  whileLoading: () => {},
  startLoading: () => {},
  endLoading: () => {},
});
