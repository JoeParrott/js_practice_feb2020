function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  let numsSq = [];
  for (i = 0; i < nums.length; i++) {
    numsSq.push(nums[i] ** 2)
  }
  return numsSq;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  //new array
  //push array[0] to new array
  //capitalize from index1 onwards and push each into newarray
  //concat new array and return
  let newWords = [];
  newWords.push(words[0]);
  for (i = 1; i < words.length; i++) {
    newWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1))
  }
  return newWords.join('')
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let peopleValues = Object.values(people);
  let sum = [];
  for (i = 0; i < peopleValues.length; i++) {
    sum.push(peopleValues[i].subjects)
  }
  let sumNew = 0;
  for (i = 0; i < sum.length; i++) {
    sumNew += sum[i].length
  }
  return sumNew;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  for (ingreds in menu) {
    if (menu[ingreds].ingredients.some(food => food === ingredient)) {
      return true
    }
  }
  return false
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let array3 = arr1.filter(pairs => arr2.includes(pairs))
  array4 = array3.sort()
  let seen = {};
  let final = [];
  let ipos = 0
  for (i = 0; i < array4.length; i++) {
    if (seen[array4[i]] !== 1) {
      seen[array4[i]] = 1;
      final[ipos++] = array4[i];
    }
  }
  return final
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
