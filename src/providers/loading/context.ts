import { createContext } from "react";

export type LoadingContextProps = {
  isLoading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  startLoading: () => void;
  endLoading: () => void;
};

export const LoadingContext = createContext<LoadingContextProps>({
  isLoading: true,
  setLoading: () => {},
  startLoading: () => {},
  endLoading: () => {},
});
