export const leftAnimation = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
  transition: { duration: 0.7 },
};

export const rightAnimation = {
  initial: { opacity: 0, x: 100 },
  whileInView: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
  transition: { duration: 1 },
};

export const upAnimation = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
  transition: { duration: 1 },
};

export const downAnimation = {
  initial: { opacity: 0, y: -100 },
  whileInView: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
  transition: { duration: 1 },
};

export const scaleAnimation = {
  initial: { opacity: 0, y: 200, scale: 0 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 200, scale: 0 },
  // transition: { duration: 0.3, delay: 0.5 },
};
