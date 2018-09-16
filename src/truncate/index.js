/**
 * This function should truncate the passed string and add "..." to
 * the end of it. Should exist ability to change "..." to some other symbols
 *
 * @param {string} str - string which should be truncated
 * @param {number} length - the max length of string after truncation
 * @param {string} replacer - the string which will be added to the end
 * @return {string} truncated string
 */
const truncate = (str, length = 0, replacer = '...') => {
  let sliced = str.slice(0, length - 3);

  if (str.length < length) return str;
  if (str.length === 0) return '';
  if (sliced.length < str.length) return sliced + replacer;
};

export default truncate;
