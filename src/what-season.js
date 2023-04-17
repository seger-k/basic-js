const { NotImplementedError } = require('../extensions/index.js');

function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!Date.parse(date) || Object.entries(date).length > 0) throw new Error('Invalid date!');
  let month = date.getMonth();
  switch(month) {
    case 11:
    case 0:
    case 1: 
      return 'winter';
    case 2: 
    case 3: 
    case 4: 
      return 'spring';
    case 5: 
    case 6: 
    case 7: 
      return 'summer';
    case 8: 
    case 9: 
    case 10: 
      return 'autumn';
  }
}

module.exports = {
  getSeason
};
