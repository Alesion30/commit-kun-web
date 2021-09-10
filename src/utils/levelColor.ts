/** レベルに応じた色 */
export const levelColor = (level: number) => {
  let bgColor: string;
  if (level >= 100) {
    bgColor = "bg-gold";
  } else if (level >= 70) {
    bgColor = "bg-silver";
  } else if (level >= 50) {
    bgColor = "bg-bronze";
  } else if (level >= 30) {
    bgColor = "bg-purple-300";
  } else if (level >= 15) {
    bgColor = "bg-pink-300";
  } else if (level >= 5) {
    bgColor = "bg-blue-300";
  } else {
    bgColor = "bg-green-300";
  }
  return bgColor;
};
