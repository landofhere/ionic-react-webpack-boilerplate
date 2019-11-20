module.exports = {
  'verbose': true,
  'moduleDirectories': [
    'node_modules',
    'src'
  ],
  'roots': [
    '<rootDir>/src'
  ],
  'transformIgnorePatterns': [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  'preset': 'ts-jest',
  'testEnvironment': 'jest-environment-jsdom-fourteen',
  'setupFilesAfterEnv': [
    '<rootDir>/tools/jest/enzyme.config.ts'
  ],
  'transform': {
    '^.+\\.tsx?$': 'ts-jest',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/tools/jest/fileTransform.js'
  },
  'testRegex': '((\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  'moduleFileExtensions': [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  'watchPlugins': [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
}