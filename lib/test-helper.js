// inspired by jest-in-case, but who needs another library?
export const cases = (desc, fn, data) => data.forEach(i => {
  test(`${desc} ${i.input || ''}`, fn(i))
})

// my own concoction pondering the above
export const testCases = fn => (
  {
    with: data => {
      data.map(fn).forEach(i => {
        test(`${fn.name} | ${i.desc}`, i.tests)
      })
    }
  }
)
