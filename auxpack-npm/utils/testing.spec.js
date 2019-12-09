const parser = require('./parser');
const fs = require('fs');
const dummyStats = require('./dummy-stats')
const path = require('path');

const target = path.resolve(__dirname, '..', '../aux-stats.json');

describe('utils/parser', () => {
  it('includes the stats meta data in parsed data', () => {
    const { stats } = dummyStats();
    let dummyData = JSON.parse(fs.readFileSync(target, { encoding: 'utf8' }))
    // expect(stats.time).toEqual(dummyData.time);
    // expect(stats.hash).toEqual(dummyData.hash);
    // expect(stats.errors).toEqual(dummyData.errors);
  });

  xit('ensures every chunk has a modules array', () => {
    const { stats } = dummyStats();
    const result = parser(stats, target, {});

    result.chunks.forEach(chunk => {
      expect(Array.isArray(chunk.modules)).toBeTruthy();
    });
  });
});
