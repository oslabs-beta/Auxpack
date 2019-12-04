const path = require('path');
const fs = require('fs');
const parseStats = require('./utils/parser');
const server = require('./utils/server');
const treeshake = require('./utils/treeshake');

module.exports = class Auxpack {
  constructor() {  }
  
  apply(compiler) {
      let data;
      const target = path.resolve(__dirname, '..', '../aux-stats.json');
      const treeTarget = path.resolve(__dirname, '..', '../tree-stats.json');

      //GETTING PREVIOUS STATS, OR SETTING A BLANK ARRAY
      if (fs.existsSync(target)) {
        data = JSON.parse(fs.readFileSync(target, { encoding: 'utf8' }));
      } else {
        data = [];
      }

      compiler.hooks.done.tap('MonitorStats', stats => {
        stats = stats.toJson();
        const parsed = parseStats(stats, target);
        const treeData = treeshake(stats.modules);
        data.push(parsed)
        console.log('\n\nAUXPACK STATS RECORDED\nCURRENT BUILD:\n', parsed);
        fs.writeFile(target, JSON.stringify(data), (err) => {
          if (err) throw err;
          server(data)
        });
        fs.writeFile(treeTarget, JSON.stringify(treeData), (err) => {
          if (err) throw err;
        })
    });
  }
};
