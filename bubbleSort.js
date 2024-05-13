function createArr(minNumber, maxNumber, arrLength) {
  const arr = [];
  for (let i = 0; i < arrLength; i++) {
    arr.push(Math.floor(Math.random() * (maxNumber - minNumber) + minNumber));
  }
  return arr;
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      let tmp = 0;
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(myArr));