import { average, difference, compassAverage, reverseHeading } from 'compass';

// inspired by jest-in-case, but who needs another library?
const cases = (desc, fn, data) => data.forEach(i => {
  test(`${desc} ${i.input || ''}`, fn(i))
})

cases(`should find simple averages of`, p => () => {
  expect(average(p.input)).toBe(p.expected);
},
  [
    { input: [1, 2], expected: 1.5 },
    { input: [100, 200], expected: 150 },
    { input: [350, 0], expected: 175 },
  ]
);

cases(`should reverse the angle of`, p => () => {
  expect(reverseHeading(p.input)).toBe(p.expected);
},
  [
    { input: [1, 2], expected: false },
    { input: [350, 0], expected: true },
    { input: [1, 21], expected: false },
    { input: [355, 5], expected: true },
    { input: [290, 20], expected: true },
    { input: [160, 200], expected: false },
    { input: [90, 270], expected: false },
    { input: [89, 271], expected: true },
    { input: [350, 50], expected: true },
    { input: [240, 240], expected: false },
  ]
);

cases(`should find difference of`, p => () => {
  expect(difference(p.input)).toBe(p.expected);
},
  [
    { input: [1, 2], expected: 1 },
    { input: [350, 0], expected: 350 },
    { input: [1, 20], expected: 19 },
    { input: [5, 5], expected: 0 },
    { input: [190, 360], expected: 170 },
  ]
);

cases(`should find a compass average of`, p => () => {
  expect(compassAverage(p.input)).toBe(p.expected);
},
  [
    { input: [1, 2], expected: 1.5 },
    { input: [350, 0], expected: 355 },
    { input: [1, 21], expected: 11 },
    { input: [355, 5], expected: 0 },
    { input: [290, 20], expected: 335 },
    { input: [160, 200], expected: 180 },
    { input: [90, 270], expected: 180 },
    { input: [89, 271], expected: 0 },
    { input: [350, 50], expected: 20 },
    { input: [240, 240], expected: 240 },
  ]
);