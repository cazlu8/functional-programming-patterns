const Box = require(`./box`)

// imperative way
/*
const moneyToFloat = str => parseFloat(str.trim().replace(/\$/g, ``))

const percentToFloat = str => {
  const normalized = str.trim().replace(/%/g, ``)
  return parseFloat(normalized) / 100
}

const applyDiscount = (priceStr, discountStr) => {
  const price = moneyToFloat(priceStr)
  const discount = percentToFloat(discountStr)
  return  price - price * discount
}
console.log(applyDiscount(`$150`, `50%`))
*/



// functional way
const moneyToFloat = str =>
      Box(str.replace(/\$/g, ``))
        .map(x => parseFloat(x))

const percentToFloat = str =>
      Box(str.replace(/%/g, ``))
        .map(x => parseFloat(x))
        .map(x => x / 100)

const applyDiscount = (priceStr, discountStr) =>
  moneyToFloat(priceStr)
    .fold(price =>
      percentToFloat(discountStr)
        .fold(discount => price - price * discount))

console.log(applyDiscount(`$150`, `%50`))
