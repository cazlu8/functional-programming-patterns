const { Sum, All, First } = require(`./semigroups`)
const { Map } = require(`immutable-ext`)

const acc1 = Map({value: Sum(5),  name: First(`Nico`), isPaid: All(true), friends: [`cazlu`]})
const acc2 = Map({value: Sum(8), name: First(`George`), isPaid: All(false), friends: [`paulo`]})

const res = acc1.concat(acc2)

console.log(res.toJS())

