export const moddedRounder = (value: number, decPlace: number) => {
  return Math.round(value * Math.pow(10, decPlace)) / Math.pow(10, decPlace);
};
