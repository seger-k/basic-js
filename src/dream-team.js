const { NotImplementedError } = require('../extensions/index.js');

function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let team = '';
  members.forEach((member) => {
    if (typeof member === 'string') team = team + member.replace(/ /g, '').toUpperCase()[0]
  })
  return team.split('').sort().join('')
}

module.exports = {
  createDreamTeam
};
