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
  if (arr.length < 2) {
    return arr
  }
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
  let b = searchTerm.toLowerCase();
  let c = [].concat.apply([], a);
  let d = c.toString().toLowerCase();
  let e = d.includes(b)
  return e;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  let a = str.toLowerCase().replace(/[^a-z ]/g, '').split(' ');
  let b = a.map((x) =>
    [x, 1]);
  let c = b.sort();
  let storage = 1;
  do {
    for (i = 0; i < c.length - 1; i++) {
      if (c[i][0] === c[i + 1][0]) {
        c[i + 1][1] = c[i][1] + c[i + 1][1];
        c.splice(i, 1);
      }
    }
    for (i = 0; i < c.length - 1; i++) {
      if (c[i][0] === c[i + 1][0]) {
        storage = 1;
      }
      else {
        storage = 0;
      }
    }
  }
  while (storage === 1)
  let d = Object.assign(...c.map(
    ([key, val]) => ({ [key]: val })
  ))
  return d;
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
