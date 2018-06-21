'use strict'

function sort(input) {
  for (var i = 0; i < input.length - 1; i++) {
    for (var j = i + 1; j < input.length; j++) {
      if (input[i] > input[j]) {
        let x = input[i]
        input[i] = input[j]
        input[j] = x
      }
    }
  }
  return input;

}

module.exports = sort
