import { average, max, min, difference, compassAverage } from 'compass';

const averages = [
  {test: [1,2], result: 1.5},
  {test: [100,200], result: 150},
  {test: [350,0], result: 175},
];

describe('average', () => {
  averages.forEach((p) => {
    it(`should find average of ${p.test}`, () => {
      expect(average(p.test[0], p.test[1])).toBe(p.result);
    });
  });
});

const maxes = [
  {test: [1,2], result: 2},
  {test: [350,0], result: 350},
  {test: [0,20], result: 20},
  {test: [5,5], result: 5},
];

describe('max', () => {
  maxes.forEach((p) => {
    it(`should find maximum of ${p.test}`, () => {
      expect(max(p.test[0], p.test[1])).toBe(p.result);
    });
  });
});

const minims = [
  {test: [1,2], result: 1},
  {test: [350,0], result: 0},
  {test: [0,20], result: 0},
  {test: [5,5], result: 5},
]

describe('minimums', () => {
  minims.forEach((p) => {
    it(`should find minimum of ${p.test}`, () => {
      expect(min(p.test[0], p.test[1])).toBe(p.result);
    });
  });
});

const differences = [
  {test: [1,2], result: 1},
  {test: [350,0], result: 350},
  {test: [1,20], result: 19},
  {test: [5,5], result: 0},
  {test: [190,360], result: 170},
]

describe('difference', () => {
  differences.forEach((p) => {
    it(`should find difference of ${p.test}`, () => {
      expect(difference(p.test[0], p.test[1])).toBe(p.result);
    });
  });
});

const compassAverages = [
  {test: [1,2], result: 1.5},
  {test: [350,0], result: 355},
  {test: [1,21], result: 11},
  {test: [355,5], result: 0},
  {test: [290,20], result: 335},
  {test: [160,200], result: 180},
  {test: [90,270], result: 180},
  {test: [89,271], result: 0},
]

describe('compassAverage', () => {
  compassAverages.forEach((p) => {
    it(`should find a compass average of ${p.test}`, () => {
      expect(compassAverage(p.test[0], p.test[1])).toBe(p.result);
    });
  });
});