const path = require('path');
const fs = require('fs');
const parseStats = require('./utils/parser');
const server = require('./utils/server');

module.exports = class Auxpack {
  constructor() {  }
  
  apply(compiler) {
      let data;
      const target = path.resolve(__dirname, '..', '../aux-stats.json');

      //GETTING PREVIOUS STATS, OR SETTING A BLANK ARRAY
      if (fs.existsSync(target)) {
        data = JSON.parse(fs.readFileSync(target, { encoding: 'utf8' }));
      } else {
        data = [];
      }

      compiler.hooks.done.tap('MonitorStats', stats => {
        stats = stats.toJson();
        const parsed = parseStats(stats, target);
        data.push(parsed)
        console.log('\n\nAUXPACK STATS RECORDED\nCURRENT BUILD:\n', parsed);
        fs.writeFile(target, JSON.stringify(data), (err) => {
          if (err) throw err;
          server(data)
        });
    });
  }
};
