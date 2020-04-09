const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  for (x = 0; x < nums.length; x++) {
    if (nums[x] === n && nums[x] !== nums[nums.length - 1]) {
      return nums[x + 1];
    }
  }
  return null
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  let a = str.toString().split('');
  let y = a.filter((ones) => { if (ones === '1') return true });
  let z = a.filter((zeros) => { if (zeros === '0') return true });
  let x = {
    1: y.length,
    0: z.length
  }
  return x;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return Number((n.toString().split('').reverse()).join('')); 
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  return ([].concat.apply([], arrs).reduce((a, b) => a + b, 0));
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2) {
    return arr
  }
  return [arr.pop()].concat((arr.slice(1, arr.length)), arr.shift());
};


const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  return ([].concat.apply([], Object.entries(haystack)).toString().toLowerCase()).includes(searchTerm.toLowerCase());
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  let a = str.toLowerCase().replace(/[^a-z ]/g, '').split(' ');
  let b = {};
  for (i = 0; i < a.length; i++) {
    const word = a[i];
    if (b[word] === undefined) {
      b[word] = 1;
    }
    else {
      b[word] += 1;
    }
  }
  return b
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
