import { ReactNode, VFC, useState, useCallback } from "react";
import { LoadingContext } from "./context";
import { LoadingOverlayLayout } from "~/components/templates/loading";

type LoadingProviderProps = {
  children: ReactNode;
};

export const LoadingProvider: VFC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const startLoading = useCallback(() => setLoading(true), []);
  const endLoading = useCallback(() => setLoading(false), []);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setLoading,
        startLoading,
        endLoading,
      }}
    >
      <LoadingOverlayLayout isLoading={isLoading}>
        {children}
      </LoadingOverlayLayout>
    </LoadingContext.Provider>
  );
};
