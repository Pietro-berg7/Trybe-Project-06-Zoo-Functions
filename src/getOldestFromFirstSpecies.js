const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const colaboradora = data.employees.find((element) => element.id === id);
  const animal = colaboradora.responsibleFor[0];
  const oldest = data.species
    .find((element) => element.id === animal)
    .residents.map((element) => element)
    .reduce((element, element2) =>
      element.age > element2.age ? element : element2
    );
  return [oldest.name, oldest.sex, oldest.age];
}

module.exports = getOldestFromFirstSpecies;
