export default {
  setupFilesAfterEnv: [
    'jest-plugin-context/setup',
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/.cache',
  ],
};
