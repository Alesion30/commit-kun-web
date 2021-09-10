export const truncateChar = (str: string, num: number = 20) => {
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num > 3 ? num - 3 : num) + "...";
  }
};
