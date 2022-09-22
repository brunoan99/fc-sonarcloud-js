const { sum, sub, times, div } = require('./calc')

const exec = () => {
  console.log(sum(1, 1))
  console.log(sub(3, 1))
  console.log(times(2, 2))
  console.log(div(8, 2))
}

module.exports = {
  exec
}