/**
 * 複数のクラス名を結合
 */
export const classNames = (...classes: string[]) =>
  classes.filter(Boolean).join(" ");
