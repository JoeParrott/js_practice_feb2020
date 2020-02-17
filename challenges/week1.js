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
  let  newPrice = originalPrice * ((100+vatRate)/100);
  return (newPrice.toFixed(2) * 1)
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let newValue = originalPrice * ((100 - reduction) / 100);
  return (newValue.toFixed(2) * 1)
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
  let count = 0;
  for(i=0; i < users.length; i++) {
      if(users[i].type === "Linux") {
        count++;
      }
  }
  return count
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // sum array into obj
    let total = scores.reduce((a, b) => a + b, 0);
    // divide obj by array.length
    let mean = total / scores.length;
  // if 2nd obj = int, return
    if(Number.isInteger(mean)) {
        return (mean.toFixed(0) *1) ;
  }
   // else return to 2dec.places
      else {
        return (mean.toFixed(2) *1);
  }
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // if n/3 and n/5 are true return FizzBuzz
  // else if n/3 is true, fizz
  // else if n/5 is true, buzz
  // else return original number
  let nOverThree = n / 3;
  let nOverFive = n / 5;
  if ((Number.isInteger(nOverThree)) && (Number.isInteger(nOverFive))) {
    return "fizzbuzz";
  }
  else if(Number.isInteger(nOverThree)) {
    return "fizz";
  }
  else if(Number.isInteger(nOverFive)) {
    return "buzz";
  }
  else {
    return n;
  }
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
