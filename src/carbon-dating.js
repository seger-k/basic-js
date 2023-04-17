const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sample) {
  if (typeof sample !== 'string' || !Number(sample) || sample <= 0 || sample > MODERN_ACTIVITY) return false;
  else return Math.ceil(Math.log(MODERN_ACTIVITY / sample) * HALF_LIFE_PERIOD / 0.693)
}

module.exports = {
  dateSample
};
