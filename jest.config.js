module.exports = {
  setupFilesAfterEnv: [
    'jest-plugin-context/setup',
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/.cache',
  ],
};
