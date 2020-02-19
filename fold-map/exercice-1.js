const { Map, List } = require('immutable-ext')
const { Sum } = require('../semigroups/semigroups')

const res = List.of(1, 2, 3)
               .foldMap(Sum, Sum.empty())

console.log(res.x)
