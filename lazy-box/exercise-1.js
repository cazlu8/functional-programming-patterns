const LazyBox = require('./lazy-box')

const moneyToFloat = str =>
  LazyBox(() => str.replace(/\$/g, ``))
    .map(x => parseFloat(x))

const percentToFloat = str =>
  LazyBox(() => str.replace(/%/g, ``))
    .map(x => parseFloat(x))
    .map(x => x / 100)

const applyDiscount = (priceStr, discountStr) =>
  moneyToFloat(priceStr)
    .fold(price =>
      percentToFloat(discountStr)
        .fold(discount => price - price * discount))


console.log(applyDiscount(`$150`, `%50`))