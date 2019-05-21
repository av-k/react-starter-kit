'use strict';
const env = require('./env');
const paths = require('./paths');

module.exports = {
  isPROD: env.NODE_ENV === 'production',
  paths,
  ...env
};
