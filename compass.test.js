import { average, reverse, difference, compassAverage, reverseHeading } from 'compass';

const simple_average_fixture = [
  {coord: [1,2], expected: 1.5},
  {coord: [100,200], expected: 150},
  {coord: [350,0], expected: 175},
];

simple_average_fixture.forEach((p) => {
  test(`should find average of ${p.coord}`, () => {
    expect(average(p.coord)).toBe(p.expected);
  });
});

const reverse_fixture = [
  {coord: [1,2], expected: false},
  {coord: [350,0], expected: true},
  {coord: [1,21], expected: false},
  {coord: [355,5], expected: true},
  {coord: [290,20], expected: true},
  {coord: [160,200], expected: false},
  {coord: [90,270], expected: false},
  {coord: [89,271], expected: true},
  {coord: [350,50], expected: true},
  {coord: [240,240], expected: false},
]

reverse_fixture.forEach((p) => {
  test(`should reverse the angle of ${p.coord}`, () => {
    expect(reverseHeading(p.coord)).toBe(p.expected);
  });
});

const difference_fixture = [
  {coord: [1,2], expected: 1},
  {coord: [350,0], expected: 350},
  {coord: [1,20], expected: 19},
  {coord: [5,5], expected: 0},
  {coord: [190,360], expected: 170},
]

difference_fixture.forEach((p) => {
  test(`should find difference of ${p.coord}`, () => {
    expect(difference(p.coord)).toBe(p.expected);
  });
});

const compass_average_fixture = [
  {coord: [1,2], expected: 1.5},
  {coord: [350,0], expected: 355},
  {coord: [1,21], expected: 11},
  {coord: [355,5], expected: 0},
  {coord: [290,20], expected: 335},
  {coord: [160,200], expected: 180},
  {coord: [90,270], expected: 180},
  {coord: [89,271], expected: 0},
  {coord: [350,50], expected: 20},
  {coord: [240,240], expected: 240},
]

compass_average_fixture.forEach((p) => {
  test(`should find a compass average of ${p.coord}`, () => {
    expect(compassAverage(p.coord)).toBe(p.expected);
  });
});
