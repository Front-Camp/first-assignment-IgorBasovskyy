/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
  return arr.reduce((a, b) => {
    if (b === Infinity || isNaN(b)) {
      b = 0;
    }
    return Math.max(a, b);
  }, 0);
};

export default max;
