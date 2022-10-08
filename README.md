# Agile collaboration exercise 

Writing a simple function, guided by a test. An introductory pairing exercise for two devs.

## Requirements / setup
Ensure you have Node.js installed

1. Clone this repo
2. In your terminal, cd to the repo folder and run `npm i`

## Instructions
Start in [index.test.js](./index.test.js). This contains an already written test for a new function that we want to write (`sortNumbers`).

1. Read and understand the test together so you have a shared understanding of what the function should do
2. Now run the tests - in your terminal run `npm run test:watch`. This will re-run the tests automatically as you make changes. If you prefer to re-run them manually each time, first cancel the test runner with CTRL + C, then run `npm run test` instead.
3. The test will initially fail because the function hasn't been written yet to make it pass. Now, one of the devs writes the function body in [index.js](./index.js) to make the test pass.
   
Making tests pass is an addictive game, isn't it..!

Next, we want to improve `sortNumbers` so it can sort the numbers it's given, either by lowest-first or highest-first.

4. The second dev writes a test in [index.test.js](./index.test.js) to ask the function to sort by highest-first, by passing a second parameter to it (eg passing `true` will ask the function to sort the numbers in ascending order and passing `false` asks it to sort them in descending order. Use the same technique as in the first test - call the function and assign the return value to a variable. Then make an 'assertion' about the return value, using `expect()`. The new test will fail when you run it.
5. Now back to the first dev - alter the `sortNumbers` function so the new test passes, and the first test keeps passing.

## Extension exercises / tips

Think of another function that you could describe with tests before writing it to turn the tests green.
eg how about a function that accepts a parameter that is a series of words and returns it with each word starting with a capital letter?
- Input parameter: 'hi there'
- Return value 'Hi There'

Or, think of your own function. *Keep it very simple to begin with*, and build up gradually. This introduction exercise is about learning to write simple functions driven by tests, not to try overly ambitious functions (at this stage anyway!). 

But later on, when you're confident using this technique ('test-driven development' or TDD) with simple functions, you'll find it really shines when writing more complex functions. You'll know instantly when you've broken something, and you'll be able to change your code with confidence. 
  
Bear in mind these tips:
- 
- while you're still new to the technique, only write a pure function (they simply accept parameters, and return a value. They don't call out to other functions, or change other variables that are declared outside of themselves.)
- write a test, make it pass, then write another test describing useful functionality that you want the code to have. Maybe that test will pass without any more changes to the code, or maybe you need to write more code to make it pass.
- after you've made a test pass, think about anything you could do to improve your code while keeping the test passing (if there isn't, no problem, especially for very simple functions). This cycle is called 'red-green-refactor' - start with a failing test, make it pass, then improve the code.
