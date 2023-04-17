const { NotImplementedError } = require('../extensions/index.js');

function getCommonCharacterCount(s1, s2) {
  let count = 0;
  s1.split('').forEach(number => {
    if (s2.includes(number)) {
      s2 = s2.replace(number, '')
      count++
    }
  })
  return count
}

module.exports = {
  getCommonCharacterCount
};
