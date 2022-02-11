module.exports = {
  webpack: function (config, env) {
    config.experiments = {
      topLevelAwait: true
    }
    return config
  }
}