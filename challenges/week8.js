const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === n) {
      if (nums[nums[i]] === nums[nums.length]) {
        return null
      }
      else {
        return nums[i + 1]
      }
    }
    else if (nums[nums[i]] === nums[nums.length]) {
      return null
    }
  }
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
  let a = n.toString().split('');
  let b = [];
  for (i = a.length - 1; i > -1; i--) {
    b.push(a[i])
  }
  return Number(b.join(''))
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let a = [].concat.apply([], arrs).reduce((a, b) => a + b, 0);
  return a;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  let a = arr.pop();
  let b = arr.slice(1, arr.length);
  let c = arr.shift();
  let aA = [a];
  let d = aA.concat(b, c);
  return d
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  let a = Object.entries(haystack);
  let c = searchTerm.toLowerCase();
  let b = a.find(x => x === c).toLowerCase();
  if (b === c) {
    return true;
  }
  else {
    return false
  }
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
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
