const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  env: {
    RAPIDAPI_KEY: process.env.RAPIDAPI_KEY,
  },
})
