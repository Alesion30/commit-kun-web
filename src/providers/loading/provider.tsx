import { ReactNode, VFC, useState, useCallback } from "react";
import { LoadingContext } from "./context";
import { LoadingOverlayLayout } from "~/components/templates/loading";

type LoadingProviderProps = {
  children: ReactNode;
};

export const LoadingProvider: VFC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const whileLoading = useCallback((func: () => Promise<any>) => {
    Promise.resolve()
      .then(() => startLoading())
      .then(() => func())
      .finally(endLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const startLoading = useCallback(() => setLoading(true), []);
  const endLoading = useCallback(() => setLoading(false), []);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setLoading,
        whileLoading,
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
