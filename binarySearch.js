const arr = createArr(-1, 3);
console.log(findElementCycle(arr, 4));
console.log(findElementRecursion(arr, 3, 0, arr.length - 1));

function createArr(firstNumber, lastNumber) {
  const arr = [];
  let firstElement = firstNumber;
  for (let i = firstNumber; i <= lastNumber; i++) {
    arr.push(firstElement++);
  }
  return arr;
}

function findElementCycle(arr, el) {
  let left = 0;
  let right = arr.length - 1;
  let position = -1;
  let isFound = false;
  let middle;

  while (isFound === false && left <= right) {
    middle = Math.floor((left + right) / 2);

    if (arr[middle] === el) {
      isFound = true;
      position = middle;
    } else if (arr[middle] > el) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return position;
}

function findElementRecursion(arr, el, left, right) {
  let middle = Math.floor((left + right) / 2);

  if (arr[middle] === el) {
    return middle;
  }

  if (arr[middle] > el && left != middle) {
    right = middle - 1;
  } else {
    left = middle + 1;
  }

  return left === right && arr[left] !== el
    ? -1
    : findElementRecursion(arr, el, left, right);
}
