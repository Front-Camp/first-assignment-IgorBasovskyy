/**
 * @param {Array<Object>} arr - this is an array of objects
 * @return {Array} result of the sum value.
 * @example
 * const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}];
 * getFlags(arr); // [1, 2, 3, 4, 5, 6]
 */
// const getFlags = arr => {
//
//   let arr1 = [];
//   let result = [];
//
//   arr.map((elem) => {
//     for (let key in elem) {
//       arr1.push(elem[key]);
//     }
//   })
//
//   for (var i = 0; i < arr1.length; i++) {
//         result = result.concat(arr1[i]);
//     }
//
//   return result;
// };

const getFlags = arr => {
  return arr.reduce((prev, next) => prev.concat(next.flags), [])
}

export default getFlags;
