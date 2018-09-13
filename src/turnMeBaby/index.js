/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
  if (typeof str === 'Number') {
    return 'this is not a string';
  } else {
    return str.reverse();
  }
};

export default turnMeBaby;
