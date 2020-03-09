function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let smallNums = [];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      smallNums.push(nums[i])
    }
  }
  return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let namesArray = [];
  for (i = 0; i < names.length; i++) {
    if (names[i].charAt(0) === char) {
      namesArray.push(names[i])
    }
  }
  return namesArray
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let verbs = [];
  for (i = 0; i < words.length; i++) {
    if (words[i].charAt(0) === "t" && words[i].charAt(1) === "o" && words[i].charAt(2) === " ") {
      verbs.push(words[i])
    }
  }
  return verbs
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let ints = [];
  for (i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i])) {
      ints.push(nums[i])
    }
  }
  return ints;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let userCities = [];
  for (i = 0; i < users.length; i++) {
    userCities.push(users[i].data.city.displayName)
  }
  return userCities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let roots = [];
  for (i = 0; i < nums.length; i++) {
    roots.push(Math.sqrt(nums[i]))
  }
  for (i = 0; i < roots.length; i++) {
    if (Number.isInteger(roots[i]) !== true) {
      roots[i] = roots[i].toFixed(2) * 1
    }
  }
  return roots;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let matches = [];
  for (i = 0; i < sentences.length; i++) {
    if (sentences[i].toLowerCase().match(str.toLowerCase())) {
      matches.push(sentences[i])
    }
  }
  return matches;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let bigOne = [];
  for (i = 0; i < triangles.length; i++) {
    let newTri = triangles[i].sort((a, b) => a - b, 0);
    bigOne.push(newTri[triangles[i].length - 1])
  }
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
