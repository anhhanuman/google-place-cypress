
require('dotenv').config()
module.exports = (on, config) => {
    config.env.apiKey = process.env.API_KEY

    return config
}
