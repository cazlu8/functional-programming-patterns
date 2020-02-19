const Sum = x =>
  ({
    x,
    concat: ({x: y}) => Sum(x + y)
  })

Sum.empty = () => Sum(0)

const All = x =>
  ({
    x,
    concat: ({x: y}) => All(x && y)
  })

All.empty = () => All(true)

const First = x =>
  ({
    x,
    concat: _ => First(x)
  })

First.empty = () => First()

module.exports = { Sum, First, All }