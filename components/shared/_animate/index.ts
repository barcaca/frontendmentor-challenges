// Basic animations

const opacity = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 1.2,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
}
const translateYUp = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
}
const translateYDown = {
  hidden: { opacity: 0, y: -100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
}
const translateXLeft = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
}
const translateXRight = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
}
const scale = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
}

export const container = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
  hover: {
    scale: [1, 1.1],
    transition: {
      duration: 0.2,
      ease: [0, 0.71, 0.9, 1.01],
    },
  },
}

export const item = {
  scale,
  translateXRight,
  translateXLeft,
  translateYDown,
  opacity,
  translateYUp,
}
