const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  const result = [];
  let currentChunk = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    // Check if adding the current element would exceed the maximum sum
    if (currentSum + arr[i] <= n) {
      currentChunk.push(arr[i]);
      currentSum += arr[i];
    } else {
      // Push the current chunk to the result
      result.push(currentChunk);

      // Start a new chunk with the current element
      currentChunk = [arr[i]];
      currentSum = arr[i];
    }
  }

  // Push the last chunk to the result
  result.push(currentChunk);

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
