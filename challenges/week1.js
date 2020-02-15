function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  let caps = word.charAt(0).toUpperCase();
  let rem = word.slice(1);
  return caps + rem;
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  let foreName = firstName.charAt(0).toUpperCase();
  let surName = lastName.charAt(0).toUpperCase();
  return foreName + "." + surName
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return originalPrice * ((100+vatRate)/100)
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return originalPrice * (reduction / 100)
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  if ((str.length % 2) == 0) {
  let evens = str.charAt((str.length-1) / 2)
  let even = str.charAt(((str.length-1) / 2) + 1)
  return evens + even
  }
  else{
  return str.charAt((str.length -1) / 2)
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  let reversed = "";
  for ( i = word.length - 1; i >= 0; i--) {
      reversed += word[i];
  }
  return reversed
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let newArray = [];
  for(i=0; i < words.length; i++) {
      let loopIndex = words[i];
      let reversed = "";
      for (a = loopIndex.length - 1; a >= 0; a--) {
        reversed += loopIndex[a];
      }
      newArray.push(reversed)
    }
  return newArray
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let count = 0; // poor Pedro and his toaster
  for(i=0; i < users.length; i++) {
      if(users.type === "Linux") {
        count++;
      }
  }
  return count
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
