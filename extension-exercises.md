
# Extension exercises / tips

Only try these after you're comfortable with the exercise in the [readme](./README.md).

Think of another function that you could describe with tests before writing it to turn the tests green.
eg how about a function that accepts a parameter that is a series of words and returns it with each word starting with a capital letter?
- Input parameter: 'hi there'
- Return value 'Hi There'

Or, think of your own function. *Keep it very simple to begin with*, and build up gradually. This introduction exercise is about learning to write simple functions driven by tests, not to try overly ambitious functions (at this stage anyway!).

But later on, when you're confident using this technique ('test-driven development' or TDD) with simple functions, you'll find it really shines when writing more complex functions. You'll know instantly when you've broken something, and you'll be able to change your code with confidence.

Bear in mind these tips:

- while you're still new to the technique, only write a pure function (they simply accept parameters, and return a value. They don't call out to other functions, or change other variables that are declared outside of themselves.)
- write a test, make it pass, then write another test describing useful functionality that you want the code to have. Maybe that test will pass without any more changes to the code, or maybe you need to write more code to make it pass.
- after you've made a test pass, think about anything you could do to improve your code while keeping the test passing (if there isn't, no problem, especially for very simple functions). This cycle is called 'red-green-refactor' - start with a failing test, make it pass, then improve the code.
