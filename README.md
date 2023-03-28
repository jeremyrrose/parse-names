# Parse names

Given an array of full names as strings, return an array of objects that store each name as `first` and `last`.

Example input:

```js
[
    "Harry Styles",
    "Beyonce Knowles",
    "Taylor Swift",
    "David Bowie",
    "Miley Cyrus",
    "Debbie Harry",
    "Mariah Carey",
    "Lauryn Hill"
]
```

Desired return value:

```js
[
  { first: 'Harry', last: 'Styles' },
  { first: 'Beyonce', last: 'Knowles' },
  { first: 'Taylor', last: 'Swift' },
  { first: 'David', last: 'Bowie' },
  { first: 'Miley', last: 'Cyrus' },
  { first: 'Debbie', last: 'Harry' },
  { first: 'Mariah', last: 'Carey' },
  { first: 'Lauryn', last: 'Hill' }
]
```

## Instructions

Run `npm i` to install the testing package.

Edit the function in `parse-names.js` to return the desired output.

Run `npm test` to test.

NOTE: If you try any `console.log`s, you'll see them _above_ the test information.

## Hints

- `.split()` ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)): Splits a string into an array of strings based on the split character you specify.
- `.map()` ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)): Returns a new array populated with the results of calling a provided function on every element in the calling array.
