const data = require('../data/zoo_data');

const days = Object.keys(data.hours);
const animals = data.species.map((element) => element.name);
const target = Object.fromEntries(
  days.map((day) => [
    day,
    {
      officeHour:
        data.hours[day].open !== 0
          ? `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`
          : 'CLOSED',
      exhibition:
        data.hours[day].close !== 0
          ? data.species
            .filter((animal) => animal.availability.includes(day))
            .map((animal) => animal.name)
          : 'The zoo will be closed!',
    },
  ]),
);

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (days.includes(scheduleTarget)) {
    return Object.fromEntries([[scheduleTarget, target[scheduleTarget]]]);
  }
  if (animals.includes(scheduleTarget)) {
    return data.species[animals.indexOf(scheduleTarget)].availability;
  }
  return target;
}

module.exports = getSchedule;
