const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
     config = injectBabelPlugin(["transform-decorators-legacy","transform-class-properties"], config);
    return config;
};