const { NotImplementedError } = require('../extensions/index.js');

function getSumOfDigits(n) {
  while (n.toString().length >= 2) {
    n = n.toString().split('').reduce((a, b) => Number(a) + Number(b))
  }
  return n
}

module.exports = {
  getSumOfDigits
};
