const data = require("../data/zoo_data");

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    const todasEspecies = data.species.map((especie) => [
      especie.name,
      especie.residents.length,
    ]);
    return Object.fromEntries(todasEspecies);
  }
  if (animal.sex) {
    return data.species
      .find((especie) => especie.name === animal.specie)
      .residents.filter((especie) => especie.sex === animal.sex).length;
  }
  return data.species.find((especie) => especie.name === animal.specie)
    .residents.length;
}

module.exports = countAnimals;
