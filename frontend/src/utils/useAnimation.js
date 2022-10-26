export const titleAnim = {
  before: { opacity: 0, y: 40 },
  after: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};
export const titleAnim2 = {
  before: { opacity: 0, y: 40 },
  after: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.5, ease: 'easeOut' },
  },
};
export const leftAnim = {
  before: {
    opacity: 0,
    x: -80,
  },

  after: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeInOut' },
  },
};
export const rightAnime = {
  before: {
    opacity: 0,
    x: 40,
    transition: { duration: 0.8, ease: 'easeInOut' },
  },

  after: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeInOut' },
  },
};
