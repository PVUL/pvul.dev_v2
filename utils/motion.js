export const textVariant = (delay = 0.4) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.5,
      delay,
    },
  },
})

export const sectionVariant = (delay = 0.4) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.5,
      delay,
    },
  },
})
