const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const childs = entrants.filter(element => element.age < 18).length;
  const adults = entrants.filter(element => element.age >= 18 && element.age < 50).length;
  const seniors = entrants.filter(element => element.age >= 50).length;
  const contagem = Object.fromEntries([['adult', adults], ['child', childs], ['senior', seniors]]);
  return contagem;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const entrantsNumber = countEntrants(entrants);
  const childTotal = entrantsNumber.child * data.prices.child;
  const adultTotal = entrantsNumber.adult * data.prices.adult;
  const seniorTotal = entrantsNumber.senior * data.prices.senior;
  return childTotal + adultTotal + seniorTotal;
}

module.exports = { calculateEntry, countEntrants };
