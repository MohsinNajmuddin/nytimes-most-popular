module.exports = {
  // Other Jest configuration options...
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(axios)/)' // Add any other modules that need transformation here
  ]
};
