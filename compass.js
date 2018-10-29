export const average = (h1,h2) => (h1 + h2) / 2
export const max = (h1, h2) => h1 >= h2 ? h1 : h2
export const min = (h1, h2) => h1 < h2 ? h1 : h2
export const difference = (h1, h2) => (
  max(h1,h2) - min(h1,h2)
)

export const compassAverage = (h1, h2) => (
  (average(h1,h2) +
    (difference(h1, h2) > 180 ? 180 : 0)
  ) % 360
);