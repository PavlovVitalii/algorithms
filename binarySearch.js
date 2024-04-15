const arr = createArr(-1, 5);
console.log(findElementCycle(arr, 5));

function createArr(firstNumber, lastNumber) {
  const arr = [];
  let firstElement = firstNumber;
  for (let i = 0; i < Math.abs(firstNumber) + (lastNumber + 1); i++) {
    arr.push(firstElement++);
  }
  return arr;
}

function findElementCycle(arr, el) {
  let left = 0;
  let right = arr.length - 1;
  let position = -1;
  let found = false;
  let middle;

  while (found === false && left <= right) {
    middle = Math.floor((left + right) / 2);

    if (arr[middle] === el) {
      found = true;
      position = middle;
    } else if (arr[middle] > el) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return position;
}
