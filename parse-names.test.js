const parseNames = require("./parse-names.js")

const input = [
    "Harry Styles",
    "Beyonce Knowles",
    "Taylor Swift",
    "David Bowie",
    "Miley Cyrus",
    "Debbie Harry",
    "Mariah Carey",
    "Lauryn Hill"
]

const expected = [
    { first: 'Harry', last: 'Styles' },
    { first: 'Beyonce', last: 'Knowles' },
    { first: 'Taylor', last: 'Swift' },
    { first: 'David', last: 'Bowie' },
    { first: 'Miley', last: 'Cyrus' },
    { first: 'Debbie', last: 'Harry' },
    { first: 'Mariah', last: 'Carey' },
    { first: 'Lauryn', last: 'Hill' }
]

const result = parseNames(input)

test("The return value is an array of objects", () => {
    expect(result.every(item => Object.prototype.toString.call(item) === "[object Object]"))
        .toBe(true)
})

test("Each object in the array has a 'first' and 'last' key", () => {
    expect(result.every(item => item.first && item.last))
        .toBe(true)
})

test("The values for 'first' and 'last' in each object match the expected return value", () => {
    expect(result.every((name,i) => name.first === expected[i].first && name.last === expected[i].last))
        .toBe(true)
})

// you'll see these console.logs /above/ the test information
console.log("RESULT:")
console.log(result)

console.log("EXPECTED RESULT:")
console.log(expected)