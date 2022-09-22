const { sum, sub, times, div } = require("./calc")

test('Should Sum return expected result', () => {
  expect(sum(1, 1)).toBe(2)
})

test('Should Sub return expected result', () => {
  expect(sub(1, 1)).toBe(0)
})

test('Should Times return expected result', () => {
  expect(times(1, 1)).toBe(1)
})

test('Should Div return expected result', () => {
  expect(div(1, 1)).toBe(1)
})