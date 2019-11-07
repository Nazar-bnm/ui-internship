module.exports = {
  'verbose': true,
  'testPathIgnorePatterns': ['node_modules'],
  'transform': {
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg)$': 'jest-transform-stub',
  },
  'setupFiles': ['<rootDir>/.jest/enzyme.setup.js'],
  'collectCoverageFrom': ['<rootDir>/src/**/*.js'],
  'snapshotSerializers': ['enzyme-to-json/serializer'],
  'moduleNameMapper': {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/src/shared/$1',
  },
};
