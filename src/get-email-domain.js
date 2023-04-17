const { NotImplementedError } = require('../extensions/index.js');

function getEmailDomain(email) {
  return email.replace(/[^@]+@/g, '');
}

module.exports = {
  getEmailDomain
};
