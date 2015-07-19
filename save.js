var config_path = require.resolve('./config.js');
var chalk = require('chalk');
var fs = require('fs');

function save(data){
  if (typeof data !== 'string') {
    data = JSON.stringify(data, null, 2);
  }
  fs.writeFileSync(config_path, 'module.exports = '+data, 'utf-8')
  console.log(chalk.green('Settings saved to'), config_path)
}

module.exports = save