const data = require("../data/zoo_data");

function getEmployeeByName(employeeName) {
  // seu código aqui
  return employeeName
    ? data.employees.find(
        (name) =>
          employeeName.includes(name.firstName) ||
          employeeName.includes(name.lastName)
      )
    : {};
}

module.exports = getEmployeeByName;
