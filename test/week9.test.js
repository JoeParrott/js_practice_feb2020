const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime
} = require("../challenges/week9");

describe("sumMultiples", () => {
    test("returns the sum of any multiples of 3 and 5 in a given array", () => {
        expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
    })

    test("check if negative numbers return correctly", () => {
        expect(sumMultiples([10, -3, 5, 22, 14])).toBe(12);
    })

    test("check if no entries returns coorectly", () => {
        expect(sumMultiples([])).toBe(0);
    })
});

describe("isValidDNA", () => {
    test("This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.", () => {
        expect(isValidDNA("CTG")).toBe(true);
        expect(isValidDNA("TGJK")).toBe(false);
    })

    test("check not case sensitive", () => {
        expect(isValidDNA("ccg")).toBe(true);
        expect(isValidDNA("tCGa")).toBe(true);
    })

    test("check special characters and numbers are not effecting outcome", () => {
        expect(isValidDNA("CTc!G")).toBe(false);
        expect(isValidDNA("AA2''&!")).toBe(false);
    })
});

describe.only("getComplementaryDNA", () => {
    test("This function will receive a string of DNA characters which should be transformed to their corresponding counterpart, the pairs are AT and CG eg AT becomes TA, CCCG becomes GGGC", () => {
        expect(getComplementaryDNA("TTG")).toBe("AAC");
        expect(getComplementaryDNA("TACG")).toBe("ATGC");
    })
    test("upper or lower case should not matter", () => {
       expect(getComplementaryDNA("tgc")).toBe("ACG");
       expect(getComplementaryDNA("a")).toBe("T");
    })
})

describe("isItPrime", () => {
    test("This function should receive a number and return true/false depending on whether it is a prime number or not.", () => {
        expect(isItPrime(17)).toBe(true);
        expect(isItPrime(9)).toBe(false);
    })
})

