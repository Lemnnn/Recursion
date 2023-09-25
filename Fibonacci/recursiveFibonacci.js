function recursiveFibs(input) {
  return input <= 0
    ? "Please enter a valid number of elements"
    : input === 1
    ? [0]
    : input == 2
    ? [0, 1]
    : [
        ...recursiveFibs(input - 1),
        recursiveFibs(input - 1)[input - 2] +
          recursiveFibs(input - 1)[input - 3],
      ];
}

console.log(recursiveFibs(8));
