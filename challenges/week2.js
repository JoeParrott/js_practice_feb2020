function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  else if (person.city === "Manchester") {
    return true
  }
  else {
    return false
  }
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  return Math.ceil(people / 40)
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  return arr.filter(phrase => phrase === "sheep").length
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  if (Number.isInteger(person.address.postCode[1] * 1)) {
    if (person.address.postCode[0] === "M") {
      return true
    }
  }
  else {
    return false
  }
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
