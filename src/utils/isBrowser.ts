/**
 * レンダリング済みかどうか
 */
export const isBrowser = (): boolean => {
  return typeof window !== "undefined";
};
