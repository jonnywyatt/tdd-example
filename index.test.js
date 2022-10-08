const { sortNumbers } = require('./index');

describe('sortNumbers', () => {
  it('returns the numbers as sorted array with lowest value first', () => {
    const result = sortNumbers([2, 1, 6])
    expect(result).toEqual([1, 2, 6])
  })

  // after you make the above test pass, fill out the second test below by copying from the test above and modifying the call to sortNumbers
  // Now we want to pass a second parameter to sortNumbers
  // if we pass true, we expect the returned list to be sorted by lowest to highest
  // if we pass false, we expect the returned list to be sorted by highest to lowest
  it('returns the numbers as sorted array with highest value first, if second param is false', () => {

  })

})
