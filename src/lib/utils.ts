// src/lib/utils.ts

// Cette fonction sert à combiner plusieurs classes CSS en une seule
export const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};
