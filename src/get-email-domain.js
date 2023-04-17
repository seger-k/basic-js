const { NotImplementedError } = require('../extensions/index.js');

function getEmailDomain(email) {
  return email.replace(/^.*@/,'')
}

module.exports = {
  getEmailDomain
};
