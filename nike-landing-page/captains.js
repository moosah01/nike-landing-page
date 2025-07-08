const captain = (arr) => {
  let maxRight = -Infinity;
  let captains = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > maxRight) {
      captains.push(arr[i]);
      console.log("Test");
      maxRight = arr[i];
    }
  }
  for (let i = 0; i < captains.length; i++) {
    console.log(captains[i]);
  }
};
let arr = [1, 7, 15, 10, 5, 4, 3, 2];
captain(arr);

const countGreaterThanRight = (arr) => {
  let minRight = Infinity; // Initialize minRight to max possible value
  let count = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > minRight) {
      count++; // it's greater than at least one element to the right
    }
    // Update minRight to keep track of the minimum to the right of current
    minRight = Math.min(minRight, arr[i]);
  }
  console.log("Count:", count);
  return count;
};

arr = [1, 7, 15, 10, 5, 4, 3, 2];
countGreaterThanRight(arr); // Output: 6
