const colors = [
  "#3FC6FF",
  "#48EE73",
  "#f986ff",
  "#AE46FA",
  "#FFCB45",
  "#FFA3A3",
  "#e70049",
];

export const getRandomColors = (): { colour1: string; colour2: string } => {
  const colour1 = colors[Math.floor(Math.random() * colors.length)];
  const colour2 = colors[Math.floor(Math.random() * colors.length)];

  if (colour1 === colour2) {
    return getRandomColors();
  }

  return { colour1, colour2 };
};
