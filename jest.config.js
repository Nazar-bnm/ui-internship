module.exports = {
  verbose: true,
  testPathIgnorePatterns: ['node_modules'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  setupFiles: ['<rootDir>/.jest/enzyme.setup.js'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx}'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
