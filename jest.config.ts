module.exports = {
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js'
  ],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testMatch: [
    '/**/src/**/*.(test|spec).(ts|tsx)'
  ],
  globals: {
    'ts-jest': {
      babelConfig: false,
      tsconfig: 'jest.tsconfig.json',
      diagnostics: false
    }
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'enzyme.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/enzyme.ts']

};

export { };
