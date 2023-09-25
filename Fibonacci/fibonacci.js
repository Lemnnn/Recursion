function fibs(input) {
  let fibArray = [0, 1];

  if (input <= 0) return "Please enter a valid number of elements";
  if (input === 1) return [0];
  if (input === 2) return fibArray;
  for (let i = 2; i < input; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }

  return fibArray;
}

console.log(fibs(8));
