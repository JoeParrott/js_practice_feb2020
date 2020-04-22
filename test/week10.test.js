const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require('../challenges/week10');


describe("sumDigits", () => {
    test("This function takes a number, and returns the sum of the digits", () => {
        expect(sumDigits(456)).toBe(15);
    })

    test("does it work with larger numbers", () => {
        expect(sumDigits(123456)).toBe(21);
    })

    test("does it work with zero", () => {
        expect(sumDigits(0)).toBe(0);
    })
});

describe("createRange", () => {
    test("function takes 3 numbers, start, end and step, returns an array with the startpoint, endpoint, and all numbers inbetween where step is sum'd from start, until end", () => {
        expect(createRange(0, 10, 2)).toEqual([0, 2, 4, 6, 8, 10]);
    })

    test("second test", () => {
        expect(createRange(1, 5, 1)).toEqual([1, 2, 3, 4, 5]);
    })
});

describe("getScreenTimeAlertList", () => {
    const dataSet =[ {
        username: "Sam",
        name: "Sam Jones",
        screenTime: [
        { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
        { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 0} },
        { date: "2019-06-14", usage: { mapMyRun: 10, whatsApp: 70, facebook: 0, safari: 31} },
        ]
      },
      {
        username: "Dave",
        name: "Dave Johnson",
        screenTime: [
        { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 150} },
        { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
        { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 150} },
        ]
      },
      {
        username: "John",
        name: "Johnathon Smith",
        screenTime: [
        { date: "2019-06-11", usage: { mapMyRun: 300, whatsApp: 100, facebook: 0, safari: 150} },
        { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 0} },
        { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 0} },
        ]
      }];
    test("Function tests whether a user has gone over the 100minutes total limit on any given day- using the given array in the above format, and a date in the format of yyyy-mm-dd as a string", () => {
        expect(getScreentimeAlertList(dataSet, "2019-06-11")).toEqual(["Dave", "John"]);
    })

    test("2nd test", () => {
        expect(getScreentimeAlertList(dataSet, "2019-06-14")).toEqual(["Sam", "Dave"]);
    })

    test("should return empty array if criteria unfulfilled", () => {
        expect(getScreentimeAlertList(dataSet, "2019-06-13")).toEqual([])
    })
});

describe("hexToRGB", () => {
    test("Function takes a 3 number hexadecimal(2 digit) in the format #AA1122 and transforms this string into the decimal equivalent, in the format rgb(170,17,34) ie. as a red green blue decimal colour code", () => {
        expect(hexToRGB("#AA1122")).toBe("rgb(170,17,34)");
    })

    test("2nd", () => {
        expect(hexToRGB("#000000")).toBe("rgb(0,0,0)");
    })

    test("3rd", () => {
        expect(hexToRGB("#FFFFFF")).toBe("rgb(255,255,255)");
    })
});

describe("findWinner", () => {
    test("this function returns either X, 0 or null by determining a winner from a game of noughts and crosses, represented by an array of 3 arrays each containing 3 elements", () => {
        expect(findWinner([
            ["X", "0", null],
            ["X", null, "0"],
            ["X", "X", "0"]
            ])).toBe("X");
    })

    test("", () => {
        expect(findWinner([
            ["X", "0", "0"],
            ["X", null, "0"],
            [null, "X", "0"]
            ])).toBe("0");
    })

    test("", () => {
        expect(findWinner([
            ["X", "0", null],
            ["X", null, "0"],
            ["0", "X", "0"]
            ])).toBe(null);
    })
});