const Right = x =>
  ({
    chain: f => f(x),
    map: f => Right(f(x)),
    fold: (f, g) => g(x),
    inspect: () => `${Right(x)}`
  })

const Left = x =>
  ({
    chain: f => Left(x),
    map: f => Left(x),
    fold: (f, g) => f(x),
    inspect: () => `${Left(x)}`
  })

const findColor = name => {
  const found = ({red: `#ff5489787`, green: `#f545455`, blue: `#f54545545`})[name]
  return found ? Right(found) : Left(null)
}

const result = findColor(`green`)
  .map(x => x.slice(1))
  .fold(e => `no color`,
        c => c.toUpperCase())

console.log(result)

const fromNullable = x => x ? Right(x) : Left()

const tryCatch = f => {
  try {
    return Right(f())
  } catch (e) {
    return Left(e)
  }
}

const fs = require(`fs`)
const getPort = () =>
tryCatch(() => fs.readFileSync(`./config.json`))
    .chain(c => tryCatch(() => JSON.parse(c)))
    .chain(c => fromNullable(c.port))
    .fold(e => 8000, p => p)

console.log(getPort())
