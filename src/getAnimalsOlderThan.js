const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return data.species
    .filter((especie) => especie.name === animal)
    .every((especie) =>
      especie.residents
        .map((idade) => idade.age)
        .every((idade) => idade >= age));
}

module.exports = getAnimalsOlderThan;
