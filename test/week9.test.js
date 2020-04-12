const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
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

describe("getComplementaryDNA", () => {
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
        expect(isItPrime(23)).toBe(true);
    })
    test("Test should fail on decimals.", () => {
        expect(isItPrime(4.33)).toBe(false);
        expect(isItPrime(11.9)).toBe(false);
    })
    test("Should not allow non numbers.", () => {
        expect(isItPrime("Jack")).toBe(false);
        expect(isItPrime("!")).toBe(false);
    })
})

describe("createMatrix", () => {
    test("This function should receive a number and return an array of n arrays, each filled with n items, filled with fill", () => {
        expect(createMatrix(2, "test")).toEqual([["test", "test"], ["test", "test"]]);
        expect(createMatrix(4, "pony")).toEqual(
            [["pony", "pony", "pony", "pony",],
            ["pony", "pony", "pony", "pony",],
            ["pony", "pony", "pony", "pony",],
            ["pony", "pony", "pony", "pony",]]
        )
    })
})

describe("areWeCovered", () => {
    test("This function takes an array of staff rotas, and a day of the week, for the café to run there must be at least 3 people in on any specific day", () => {
        expect(areWeCovered(
            [
                { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
                { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
                { name: "Jim", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
                { name: "Carey", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
                { name: "Marco", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] }
            ]
            , "Sunday")).toBe(true)
        expect(areWeCovered(
            [
                { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
                { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
                { name: "Jim", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
                { name: "Carey", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
                { name: "Marco", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] }
            ]
            , "Tuesday")).toBe(true)
        expect(areWeCovered(
            [
                { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
                { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
                { name: "Jim", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
                { name: "Carey", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
                { name: "Marco", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] }
            ]
            , "Monday")).toBe(false)
            expect(areWeCovered(
                [
                    { name: "Sally",   rota: ["Monday", "Tuesday", "Friday"] },
                    { name: "Pedro",   rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
                    { name: "Jim",     rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
                    { name: "Carey",   rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
                    { name: "Marco",   rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] }
                   ]
                ,"St Patricks Day")).toBe(false)
    })
})

