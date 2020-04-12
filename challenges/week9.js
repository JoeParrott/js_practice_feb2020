/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  let totalSum = 0;
  arr.forEach((n) => {
    if (n % 3 === 0 || n % 5 === 0) {
      totalSum += n;
    }
  })
  return totalSum;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  let arr = str.toLowerCase().split('');
  if (arr.length === arr.filter((char) => {
    if (char === "c" || char === "t" || char === "a" || char === "g") {
      return true;
    }
  }).length) {
    return true
  }
  else {
    return false
  }
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */

const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("string is required");
  let s = str.toUpperCase().split('');
  return s.map((x) => {
    if (x === "T") { return "A" }
    if (x === "A") { return "T" }
    if (x === "C") { return "G" }
    if (x === "G") { return "C" }
  }).join('');
}

/*
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  let s = str.toUpperCase().split('');
  let t = s.filter((i) => { if (i === "T") return true });
  let a = s.filter((i) => { if (i === "A") return true });
  let c = s.filter((i) => { if (i === "C") return true });
  let g = s.filter((i) => { if (i === "G") return true });
  return ("TA".repeat(Math.min(t.length, a.length)) + "CG".repeat(Math.min(c.length, g.length)));
}; */

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  if (Number.isInteger(n) === false) { return false };
  let d = n - 1;
  while (d > 1) {
    if ((n % d) == 0) return false;
    d--;
  }
  return true;

};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  if (fill.indexOf(",") !== -1) throw new Error("Please do not use commas in fill");
  let arr = ((fill + ',').repeat(n)).split(',');
  arr.length = n
  return arr.map(() => { return arr });
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  let count = 0;
  for (i = 0; i < staff.length; i++) {
    for (x = 0; x < staff[i].rota.length; x++) {
      if (staff[i].rota[x] === day) {
        count++
      }
    }
  }
  if (count >= 3) { return true }
  else { return false }
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
