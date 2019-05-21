const path = require('path');
const fs = require('fs');
//
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  resolveApp,
  appSrc: resolveApp('src'), // App source
  appIndexJs: resolveApp('src/index.js'), // Main entry point
  appBuild: resolveApp('public'), // Prod built client files end up here
};
