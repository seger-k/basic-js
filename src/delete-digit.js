const { NotImplementedError } = require('../extensions/index.js');

function deleteDigit(n) {
  n = n.toString();
  let result = [];
  for(let i = 0; i < n.length; i++){
    result.push(n.replace(n[i], ''))
  }
  return Number(result.sort()[result.length-1])
}

module.exports = {
  deleteDigit
};
