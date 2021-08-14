function bubblesortOnce(a) {
  let sortArray = a.slice();
  for (let i = 0; i < sortArray.length; i++) {
    if (sortArray[i] > sortArray[i + 1]) {
      [sortArray[i], sortArray[i + 1]] = [sortArray[i + 1], sortArray[i]];
    }
  }
  return sortArray;
}
console.log(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]));
