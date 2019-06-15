const RANGE = 360
const HALFRANGE = RANGE / 2

const log = f => { console.log(f); return f }

const average = ([h1, h2]) => (h1 + h2) / 2
const difference = ([h1, h2]) => Math.abs(h1 - h2)
const reverseHeading = (headings) => difference(headings) > HALFRANGE
const adjustHeading = (headings) => reverseHeading(headings) ? HALFRANGE : 0
const compassAverage = (headings) => (average(headings) + adjustHeading(headings)) % RANGE

export { average, difference, reverseHeading, adjustHeading, compassAverage }