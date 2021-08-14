function stray(numbers) {
  if (numbers[0] !== numbers[1]) {
    if (numbers[1] === numbers[2]) {
      return numbers[0];
    }
    return numbers[1];
  }
  for (let i = 2; i < numbers.length; i++) {
    if (numbers[i] !== numbers[0]) {
      return numbers[i];
    }
  }
}

console.log(stray([10, 20, 20]));
console.log(stray([1111, 2222, 1111]));
console.log(
  stray([
    1111, 1111, 2222, 1111, 1111, 1111, 1111, 1111, 1111, 1111, 1111, 1111,
    1111,
  ])
);
