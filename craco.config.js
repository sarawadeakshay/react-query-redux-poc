const path = require('path');

module.exports = function({ env, paths }) {
  console.log('env ==== : ', env);
  return {
    webpack: {
      alias: {
        environment: path.join(__dirname, 'src', 'env', process.env.CLIENT_ENV)
      }
    },
    jest: {
      configure: {
        testPathIgnorePatterns: [
          "<rootDir>/src/env/"
        ],
        moduleNameMapper: {
          environment: "<rootDir>/src/env/test"
        },
      }
    }
  };
};
