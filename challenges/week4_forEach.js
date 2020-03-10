function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let small = [];
  nums.forEach((x) => {
    if (x < 1) {
      small.push(x)
    }
  })
  return small
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let namesArray = [];
  names.forEach((x) => {
    if (x.charAt(0) === char) {
      namesArray.push(x)
    }
  })
  return namesArray
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let verbs = [];
  words.forEach((x) => {
    if (x.charAt(0) === "t" && x.charAt(1) === "o" && x.charAt(2) === " ") {
      verbs.push(x)
    }
  })
  return verbs
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let ints = [];
  nums.forEach((x) => {
    if (Number.isInteger(x)) {
      ints.push(x)
    }
  })
  return ints;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let userCities = [];
  users.forEach((x) => {
    userCities.push(x.data.city.displayName)
  })
  return userCities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let roots = [];
  let rootsTo2 = [];
  nums.forEach((x) => {
    roots.push(Math.sqrt(x))
  })
  roots.forEach((y) => {  
  if (Number.isInteger(y) !== true) {
      y = y.toFixed(2) * 1;
      rootsTo2.push(y);
  }
  else {
    rootsTo2.push(y)
  }
  })
  return rootsTo2;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let matches = [];
  sentences.forEach((x) => {
    if (x.toLowerCase().match(str.toLowerCase())) {
      matches.push(x)
    }
  })
  return matches;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let bigOne = [];
  triangles.forEach((x) => {
    let newTri = x.sort((a, b) => a - b, 0);
    bigOne.push(newTri[x.length - 1])
  })
  return bigOne;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
