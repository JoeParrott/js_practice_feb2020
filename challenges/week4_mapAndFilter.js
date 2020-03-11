function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let smallNums = nums.filter((x) => {
    if (x < 1) {
      return true
    }
    else {
      return false
    }
  })

  return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let namesArray = names.filter((x) => {
    if (x.charAt(0) === char) {
      return true
    }
    else {
      return false
    }
  })
  return namesArray
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let verbs = words.filter((x) => {
    if (x.charAt(0) === "t" && x.charAt(1) === "o" && x.charAt(2) === " ") {
      return true
    }
    else {
      return false
    }
  })
  return verbs
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let ints = nums.filter((x) => {
    if (Number.isInteger(x)) {
      return true
    }
    else {
      return false
    }
  })
  return ints;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let userCities = users.map((x) => x.data.city.displayName)
  return userCities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let roots = nums.map((x) => Math.sqrt(x));
  let rootsToTwo = roots.map((y) => {
    if (Number.isInteger(y) !== true) {
      return y.toFixed(2) * 1
    }
    else {
      return y
    }
  })
  return rootsToTwo
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let matches = sentences.filter((x) => {
    if (x.toLowerCase().match(str.toLowerCase())) {
      return true
      }
    else {
      return false
      }
    })
  return matches;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let bigOne = triangles.map((x) => {
    let newTri = x.sort((a, b) => a - b, 0);
    return newTri[x.length - 1]
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
