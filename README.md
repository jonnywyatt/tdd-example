# Test Driven Development beginner exercise

This exercise will guide you to use tests to help write a simple function.

## Requirements / setup
Ensure you have Node.js installed

1. Clone this repo
2. In your terminal, cd to the repo folder and run `npm i`

## Steps
Start in [index.test.js](./index.test.js). This contains an already written test for a function that we want to complete called `sortNumbers` which is in [index.js](./index.js).

1. Read and understand the first test in [index.test.js](./index.test.js) so you have an understanding of what the test expects the function to do
2. Now run the test - in your terminal run `npm test`. Every time you save changes, the test in [index.test.js](./index.test.js) will re-run automatically
3. The test will initially fail because the contents of the `sortNumbers` function in [index.js](./index.js) hasn't been written yet. The test output says that it expected `[1, 2, 6]` but it received `undefined`. This is because `sortNumbers` isn't returning anything yet, so `const result` is set to undefined.
4. Write some code inside the `sortNumbers` function in [index.js](./index.js) to sort the numbers it receives, and return the sorted array. Save the file and the tests will re-run automatically in your terminal - if you made the correct change to `sortNumbers` then the test will pass.

Next, we want to improve the `sortNumbers` function so it can sort the numbers it's given either by lowest-first or highest-first.

5. There's a second test in [index.test.js](./index.test.js) to ask the function to sort by highest-first, by passing a second parameter to it (eg passing `true` will ask the function to sort the numbers in ascending order and passing `false` asks it to sort them in descending order.
Remove `.skip` from the title of the second test. Use the same technique in the second test as is used in the first test - call the function and assign the return value to a variable. Then make an 'assertion' about the return value, using `expect()`. 
The new test will fail when you run it.
6. Now alter the `sortNumbers` function so the second test passes
7. The change you made to `sortNumbers` might have caused your first test to stop passing, so update the first test to pass the correct second parameter to `sortNumbers`, so that the test now passes.
