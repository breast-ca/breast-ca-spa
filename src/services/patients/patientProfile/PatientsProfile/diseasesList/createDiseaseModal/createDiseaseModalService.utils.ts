const colors = [
  "#3FC6FF",
  "#48EE73",
  "#61F5FF",
  "#7C47FF",
  "#85ABFC",
  "#AE46FA",
  "#FFCB45",
];

export const getRandomColors = (): { colour1: string; colour2: string } => {
  const colour1 = colors[Math.floor(Math.random() * colors.length)];
  const colour2 = colors[Math.floor(Math.random() * colors.length)];

  if (colour1 === colour2) {
    return getRandomColors();
  }

  return { colour1, colour2 };
};
