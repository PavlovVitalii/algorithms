console.log(createArr(50));

function createArr(quantityElements) {
  const arr = [...new Array(quantityElements)].map((el) =>
    Math.floor(Math.random() * (100 - -100) + -100)
  );
  return arr;
}

function findElementCycle(arr) {
  let left = -1;
  let right = arr.length - 1;
  
}
