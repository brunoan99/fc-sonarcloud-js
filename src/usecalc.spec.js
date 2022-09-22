const { exec } = require('./usecalc')

test('Should call console.log', () => {
  const consoleSpy = jest.spyOn(console, 'log')
  exec()
  expect(consoleSpy).toHaveBeenCalledTimes(4)
})